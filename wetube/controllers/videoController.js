import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
}; // JS야 이 function의 어떤 부분은 꼭 기다려야 해. asynv와 await는 짝이다.
// try와 catch를 사용해서 에러가 발생했을 때 어떻게 해야할 것인가를 설정해줘야한다.
// upload하기 : 어떻게 user가 vidoe file을 선택해서 어딘가에 upload해서 해당 file url을 얻고
// fileUrl로 video를 생성하는 거야
// file을 upload해서 middelware에서 받아서 middelware에서 file을 upload하고 URL을 복해서 database에 저장
export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};
export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  console.log(newVideo);
  // location이 필요하다. file자체를 저장하지 않아. 그 file의 location을 저장
  // 업로드 세이브 비디오
  // 사용자가 비디오를 업로드하고 나면, 새로운 id를 반환받고, 업로드 후에 사용자를 업로드한 비디오의 videoDetail 페이지로 이동시켜줌
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  console.log(req.params);
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: "Video Detail", video });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditVideo = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description },
  } = req;
  try {
    await Video.findByIdAndUpdate({ id }, { title, description });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
