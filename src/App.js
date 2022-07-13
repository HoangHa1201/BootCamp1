import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="grid">
        <div className="navbar header row ">
            <div className="col l-8 m-10 c-12">
                <div className="row">
                    <div className="navbar__element navbar__instar--img col l-4 m-4 c-4">
                        <a href="#">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png"
                                alt="Instagram_logo"/>
                        </a>
                    </div>
                    <div className="navbar__element navbar_search col l-4 m-4 c-0">
                        <div className="navbar_search--box">
                            <i className="navbar_search--icon fa-solid fa-magnifying-glass"></i>
                            <input type="search" placeholder="Tìm kiếm" className="navbar_search--input"/>
                        </div>
                    </div>
                    <div className="navbar__element navbar__icons col l-4 m-4 c-8">
                        <div className="row">
                            <i className="navbar__icon col l-2 m-2 c-2  fa-solid fa-house"></i>
                            <i className="navbar__icon col l-2 m-2 c-2 fa-brands fa-facebook-messenger"></i>
                            <i className="navbar__icon col l-2 m-2 c-2 fa-regular fa-square-plus"></i>
                            <i className="navbar__icon col l-2 m-2 c-2 fa-regular fa-compass"></i>
                            <i className="navbar__icon col l-2 m-2 c-2 fa-regular fa-heart"></i>
                            <div className="navbar__icon col l-2 m-2 c-2 navbar__icon--avatar">
                                <img src="./assets/img/avatar-trang.webp"
                                    alt="avatar"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="body row ">
            <div className="col l-8 m-12 c-12 ">
                <div className="row">
                    <div className="body__content col l-6 m-8 c-11">
                        <div className="body__content--head bgd-content">
                            <div className="row body__newPost">
                                <div className="body__newPost--infor ">
                                    <div className="body__newPost--avatar avatar__share">
                                        <img src="./assets/img/avatar.jpg" alt="avatar"/>
                                    </div>
                                    <div className="body__newPost--name name">
                                        Nhật Hạ
                                    </div>
                                </div>
                                <div className="body__newPost--infor ">
                                    <div className="body__newPost--avatar avatar__share">
                                        <img src="./assets/img/avatar1.jpg" alt="avatar"/>
                                    </div>
                                    <div className="body__newPost--name name">
                                        Lê Hoàng An Bình
                                    </div>
                                </div>
                                <div className="body__newPost--infor ">
                                    <div className="body__newPost--avatar avatar__share">
                                        <img src="./assets/img/avatar.jpg" alt="avatar"/>
                                    </div>
                                    <div className="body__newPost--name name">
                                        Nhật Hạ
                                    </div>
                                </div>
                                <div className="body__newPost--infor ">
                                    <div className="body__newPost--avatar avatar__share avatar__share">
                                        <img src="./assets/img/avatar1.jpg" alt="avatar"/>
                                    </div>
                                    <div className="body__newPost--name name">
                                        Lê Hoàng An Bình
                                    </div>
                                </div>
                                <div className="body__newPost--infor ">
                                    <div className="body__newPost--avatar avatar__share">
                                        <img src="./assets/img/avatar.jpg" alt="avatar"/>
                                    </div>
                                    <div className="body__newPost--name name">
                                        Nhật Hạ
                                    </div>
                                </div>
                                <div className="body__newPost--infor ">
                                    <div className="body__newPost--avatar avatar__share">
                                        <img src="./assets/img/avatar1.jpg" alt="avatar"/>
                                    </div>
                                    <div className="body__newPost--name name">
                                        Lê Hoàng An Bình
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body__newContent bgd-content">
                            <div className="body__newContent--head">
                                <div className="body__newContent--head-info">
                                    <div className="body__newContent__head--avatar avatar__share">
                                        <img src="./assets/img/avatar.jpg" alt=""/>
                                    </div>
                                    <div className="body__newContent__head--name name">
                                        Nhật Hạ
                                    </div>
                                </div>
                                <div className="body__newContent__head--menu">
                                    <i className="fa-solid fa-ellipsis"></i>
                                </div>
                            </div>
                            <div className="body__newContent--img">
                                <img src="./assets/img/avatar.jpg" alt=""/>
                                <i className="fa-solid fa-angle-right body__newContent--icon"></i>
                            </div>
                            <div className="body__newContent--icons">
                                <div className="body__newContent--iconFirst">
                                    <i className="hover fa-regular fa-heart"></i>
                                    <i className="hover fa-regular fa-comment"></i>
                                    <i className="hover fa-regular fa-paper-plane"></i>
                                </div>
                                <div className="body__newContent--iconSecond">
                                    <i className=" fa-solid fa-circle blue"></i>
                                    <i className=" fa-solid fa-circle"></i>
                                    <i className=" fa-solid fa-circle"></i>

                                </div>
                                <div className="body__newContent--iconThird">
                                    <i className="hover fa-regular fa-bookmark"></i>
                                </div>
                            </div>
                            <div className="body__newContent--like">
                                <img src="./assets/img/avatar.jpg" alt=""/>
                                <div className="body__newContent--like-text">
                                    <div className="body__newContent__like-name first-text">Nhật Hạ</div>
                                    <div className="body__newContent__like-and second-text"> và</div>
                                    <div className="body__newContent__like-num first-text">2,970,623 người khác</div>
                                    <div className="body__newContent__liked second-text">đã thích</div>
                                </div>
                            </div>
                            <div className="body__newContent--content">
                                <div className="body__newContent__content-name first-text">Nhật Hạ</div>
                                <div className="body__newContent__content-twitch second-text">Home work HTML && CSS Boot Camp Techainer</div>
                            </div>
                            <div className="body__newContent--comment">
                                <div className="body__newContent-comment-head third-text">
                                    Xem tất cả 8,305 bình luận
                                </div>
                                <div className="body__newContent-comment-body">
                                    <div className="body__newContent-comment-body-texts">
                                        <div className="body__newContent-comment-body-name first-text">Hoàng Hải</div>
                                        <div className="body__newContent-comment-body-text second-text">Lập trình Front-end với ReactJS</div>
                                    </div>
                                    <i className="hover fa-regular fa-heart"></i>
                                </div>
                                <div className="body__newContent-comment-body">
                                    <div className="body__newContent-comment-body-texts">
                                        <div className="body__newContent-comment-body-name first-text">Hoàng Hải</div>
                                        <div className="body__newContent-comment-body-text second-text">Lập trình Front-end với ReactJS</div>
                                    </div>
                                    <i className="hover fa-regular fa-heart"></i>
                                </div>
                                <div className="body__newContent-comment-time third-text">
                                    2 NGÀY TRƯỚC
                                </div>
                            </div>
                            <div className="body__newContent--comment-add">
                                <div className="body__newContent--comment-add-first">
                                    <i className="hover fa-regular fa-face-smile"></i>
                                    <div className="body__newContent--comment-add-first-text third-text"> Thêm bình luận...</div>
                                </div>
                                <div className="body__newContent--comment-add-last">Đăng</div>
                            </div>
                        </div>
                        <div className="body__newContent bgd-content">
                            <div className="body__newContent--head">
                                <div className="body__newContent--head-info">
                                    <div className="body__newContent__head--avatar avatar__share">
                                        <img src="./assets/img/avatar.jpg" alt=""/>
                                    </div>
                                    <div className="body__newContent__head--name name">
                                        Nhật Hạ
                                    </div>
                                </div>
                                <div className="body__newContent__head--menu">
                                    <i className="fa-solid fa-ellipsis"></i>
                                </div>
                            </div>
                            <div className="body__newContent--img">
                                <img src="./assets/img/avatar.jpg" alt=""/>
                                <i className="fa-solid fa-angle-right body__newContent--icon"></i>
                            </div>
                            <div className="body__newContent--icons">
                                <div className="body__newContent--iconFirst">
                                    <i className="hover fa-regular fa-heart"></i>
                                    <i className="hover fa-regular fa-comment"></i>
                                    <i className="hover fa-regular fa-paper-plane"></i>
                                </div>
                                <div className="body__newContent--iconSecond">
                                    <i className=" fa-solid fa-circle blue"></i>
                                    <i className=" fa-solid fa-circle"></i>
                                    <i className=" fa-solid fa-circle"></i>

                                </div>
                                <div className="body__newContent--iconThird">
                                    <i className="hover fa-regular fa-bookmark"></i>
                                </div>
                            </div>
                            <div className="body__newContent--like">
                                <img src="./assets/img/avatar.jpg" alt=""/>
                                <div className="body__newContent--like-text">
                                    <div className="body__newContent__like-name first-text">Nhật Hạ</div>
                                    <div className="body__newContent__like-and second-text"> và</div>
                                    <div className="body__newContent__like-num first-text">2,970,623 người khác</div>
                                    <div className="body__newContent__liked second-text">đã thích</div>
                                </div>
                            </div>
                            <div className="body__newContent--content">
                                <div className="body__newContent__content-name first-text">Nhật Hạ</div>
                                <div className="body__newContent__content-twitch second-text">Home work HTML && CSS Boot Camp Techainer</div>
                            </div>
                            <div className="body__newContent--comment">
                                <div className="body__newContent-comment-head third-text">
                                    Xem tất cả 8,305 bình luận
                                </div>
                                <div className="body__newContent-comment-body">
                                    <div className="body__newContent-comment-body-texts">
                                        <div className="body__newContent-comment-body-name first-text">Hoàng Hải</div>
                                        <div className="body__newContent-comment-body-text second-text">Lập trình Front-end với ReactJS</div>
                                    </div>
                                    <i className="hover fa-regular fa-heart"></i>
                                </div>
                                <div className="body__newContent-comment-body">
                                    <div className="body__newContent-comment-body-texts">
                                        <div className="body__newContent-comment-body-name first-text">Hoàng Hải</div>
                                        <div className="body__newContent-comment-body-text second-text">Lập trình Front-end với ReactJS</div>
                                    </div>
                                    <i className="hover fa-regular fa-heart"></i>
                                </div>
                                <div className="body__newContent-comment-time third-text">
                                    2 NGÀY TRƯỚC
                                </div>
                            </div>
                            <div className="body__newContent--comment-add">
                                <div className="body__newContent--comment-add-first">
                                    <i className="hover fa-regular fa-face-smile"></i>
                                    <div className="body__newContent--comment-add-first-text third-text"> Thêm bình luận...</div>
                                </div>
                                <div className="body__newContent--comment-add-last">Đăng</div>
                            </div>
                        </div>
                    </div>
                    <div className="body__infor col l-4 m-0 c-0">
                        <div className="body__infor--head">
                            <div className="body__infor--head-infor">
                                <img src="./assets/img/avatar-trang.webp" alt=""/>
                                <div className="body__infor--head-name">
                                    <div className="body__infor--head-pryname first-text">BootCamp2022</div>
                                    <div className="body__infor--head-secondname third-text">BootCamp Techainer</div>
                                </div>
                            </div>
                            <div className="body__infor--head-transfer first-text blue">Chuyển</div>
                        </div>
                        <div className="body__infor--container">
                            <div className="body__infor--container-head">
                                <div className="body__infor--container-exm first-text">Gợi ý cho bạn</div>
                                <div className="body__infor--container-seeAll second-text">Xem tất cả</div>
                            </div>
                            <div className="body__infor--container-body">
                                <div className="body__infor--container-offer">
                                    <img src="./assets/img/avatar2.jpg" alt=""/>
                                    <div className="body__infor--container-name">
                                        <div className="body__infor--container-pryname first-text">React Native</div>
                                        <div className="body__infor--container-sencondname third-text">Phổ biến</div>
                                    </div>
                                </div>
                                <div className="body__infor--container-follow first-text blue">Theo dõi</div>
                            </div>
                            <div className="body__infor--container-body">
                                <div className="body__infor--container-offer">
                                    <img src="./assets/img/avatar2.jpg" alt=""/>
                                    <div className="body__infor--container-name">
                                        <div className="body__infor--container-pryname first-text">React Native</div>
                                        <div className="body__infor--container-sencondname third-text">Phổ biến</div>
                                    </div>
                                </div>
                                <div className="body__infor--container-follow first-text blue">Theo dõi</div>
                            </div>
                            <div className="body__infor--container-body">
                                <div className="body__infor--container-offer">
                                    <img src="./assets/img/avatar2.jpg" alt=""/>
                                    <div className="body__infor--container-name">
                                        <div className="body__infor--container-pryname first-text">React Native</div>
                                        <div className="body__infor--container-sencondname third-text">Phổ biến</div>
                                    </div>
                                </div>
                                <div className="body__infor--container-follow first-text blue">Theo dõi</div>
                            </div>
                            <div className="body__infor--container-body">
                                <div className="body__infor--container-offer">
                                    <img src="./assets/img/avatar2.jpg" alt=""/>
                                    <div className="body__infor--container-name">
                                        <div className="body__infor--container-pryname first-text">React Native</div>
                                        <div className="body__infor--container-sencondname third-text">Phổ biến</div>
                                    </div>
                                </div>
                                <div className="body__infor--container-follow first-text blue">Theo dõi</div>
                            </div>
                            <div className="body__infor--container-body">
                                <div className="body__infor--container-offer">
                                    <img src="./assets/img/avatar2.jpg" alt=""/>
                                    <div className="body__infor--container-name">
                                        <div className="body__infor--container-pryname first-text">React Native</div>
                                        <div className="body__infor--container-sencondname third-text">Phổ biến</div>
                                    </div>
                                </div>
                                <div className="body__infor--container-follow first-text blue">Theo dõi</div>
                            </div>
                        </div>
                        <div className="body__infor--footer">
                            <div className="body__infor--footer-contact third-text">
                                <a href="#">Giới thiệu</a>
                                <a href="#">Trợ giúp</a>
                                <a href="#">Báo chí</a>
                                <a href="#">API</a>
                                <a href="#">Việc Làm</a>
                                <a href="#">Quyền Riêng tư</a>
                                <a href="#">Điều khoản</a>
                                <a href="#">Vị trí</a>
                                <a href="#">Ngôn ngữ</a>
                            </div>
                            <div className="body__infor--footer-license third-text">
                                © 2022 INSTAGRAM FROM META
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer row">
        </div>
    </div>
  );
}

export default App;
