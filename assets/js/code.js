// Redirect Category to Specific Page with Query Param
const categoryToProduct = (redirect) => {
    // console.log(redirect);
    location.href = `./shop.html?category=${redirect}`;
}

// Footer Copyright Year
const getCopyrightYear = () => {
    const copyright_year_box = document.querySelector('#copyright_year');
    copyright_year_box.innerText = new Date().getFullYear();
}