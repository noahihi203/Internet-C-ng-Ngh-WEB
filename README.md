# Website bán hàng thời trang nam
## Giới thiệu
Dự án này sử dụng Node.js và ORM Sequelize để quản lý cơ sở dữ liệu. 
Hệ quản trị của dự án này là MySQL, một hệ quản trị cở sở dữ liệu mạnh mẽ và linh hoạt.

## Mục tiêu
- Cung cấp một website bán hàng thời trang nam với giao diện thân thiện với người dùng

## Các công nghệ sử dụng
Node.js
Express.js (tùy chọn)
Sequelize ORM
MySQL 

## Cấu trúc thư mục:
## Cài đặt
### Clone dự án:
`bash
git clone https://github.com/noahihi203/IE104-Web.git
cd server
`
### Cài đặt các package:
`npm install`

### Cấu hình cơ sở dữ liệu
#### 1. Tạo cơ sở dữ liệu
Chạy câu lệnh sau để tạo cơ sở dữ liệu từ file cấu hình (config file) của Sequelize:
`npx sequelize-cli db:create`

#### 2. Chạy migration
Sau khi đã tạo cơ sở dữ liệu, bạn cần chạy migration để thiết lập các bảng trong cơ sở dữ liệu:
`npx sequelize-cli db:migrate`

### **Khởi động web**
`npm start`
Ứng dụng sẽ chạy tại http://localhost:8000

