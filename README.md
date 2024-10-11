**Cấu hình cơ sở dữ liệu**
## Bước 1: Tạo cơ sở dữ liệu
Chạy câu lệnh sau để tạo cơ sở dữ liệu từ file cấu hình (config file) của Sequelize:
`npx sequelize-cli db:create`

## Bước 2: Chạy migration
Sau khi đã tạo cơ sở dữ liệu, bạn cần chạy migration để thiết lập các bảng trong cơ sở dữ liệu:
`$ npx sequelize-cli db:migrate`
