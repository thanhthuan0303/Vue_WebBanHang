const state = {
    
    status: 'Cửa hàng trực tuyến Một cửa hàng trực tuyến, còn được gọi là trang web Thương mại điện tử, là nơi mọi người có thể mua sản phẩm trực tiếp từ trang web của bạn. Có thể bạn đã từng truy cập một số trang web Thương mại điện tử trước đây, hầu hết các thương hiệu lớn đều có chúng như lazada , Amazon , shopee , v.v. Bạn có thể truy cập các trang web này, mua sản phẩm trực tuyến và được giao hàng cho bạn. Nhưng các cửa hàng trực tuyến không chỉ dành cho các thương hiệu lớn, các công ty nhỏ hơn cũng có thể có chúng. Trên trang web Thương mại điện tử, bạn sẽ cần liệt kê các sản phẩm bạn có để bán, bao gồm hình ảnh, mô tả sản phẩm và giá cả. Bạn cũng cần có giỏ hàng và trang thanh toán nơi khách có thể nhập thông tin thanh toán của họ để mua hàng.',
    products: [
        {
            id: 1,
            name: 'Áo thun nam nữ unisex',
            image: require('@/assets/menu/Áo thun nam nữ unisex.jpg'),
            description: 'Áo thun nam nữ unisex tay lỡ phông form rộng teen cổ tròn freesize cotton',
            price: 200000,
        },
        {
            id: 2,
            name: 'Áo Thun Nam Polo Ngắn Tay',
            image: require('@/assets/menu/Áo Thun Nam Polo Ngắn Tay.jpg'),
            description: 'Áo Thun Nam Polo Ngắn Tay APC21013 Chất Liêu 100% Coolmax',
            price: 300000,
        },
        {
            id: 3,
            name: 'Áo khoác dù nam bomber',
            image: require('@/assets/menu/Áo khoác dù nam bomber.jpg'),
            description: 'Áo khoác bomber 2 lớp thoáng mát thêu logo TM cá tính năng động',
            price: 600000,
        },
        {
            id: 4,
            name: 'Bộ Mặc Nhà Thể Thao Nam',
            image: require('@/assets/menu/Bộ Mặc Nhà Thể Thao Nam.jpg'),
            description: 'Form regular Hàn Quốc mang lại phong cách trẻ trung, lịch lãm',
            price: 240000,
        },
        {
            id: 5,
            name: 'quần đùi nam thể thao Sport',
            image: require('@/assets/menu/quần đùi nam thể thao Sport.jpg'),
            description: 'Quần Sport vải Thun Poly 2 Da với chất liệu vải thun Poly 2 Da cao cấp',
            price: 200000,
        },
        {
            id: 6,
            name: 'Áo thun nam',
            image: require('@/assets/menu/Áo thun nam.jpg'),
            description: 'Áo thun nam cổ bẻ vải cá sấu là trang phục giúp các chàng trai làm mới phong cách của chính mình',
            price: 340000,
        },
    ],

    // products: [],
    cart: [],
    searchValue: '',
}

export default state
