const Main = () => {
    const user = {
        name : "서해안",
        isLogin : true,
    };

    return(
        <header>
            {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
        </header>
    );
};
export default Main