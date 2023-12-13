# Router

## Khái niệm

-   **_Router_** trong ReactJS là một thư viện cho phép bạn quản lý các tuyến đường trong ứng dụng React của mình. **_Router_** cho phép bạn định nghĩa các tuyến đường dựa trên URL, và sau đó hiển thị các thành phần khác nhau dựa trên tuyến đường hiện tại.

-   **_Router_** hoạt động bằng cách tạo một cây component, với mỗi component đại diện cho một tuyến đường. Khi người dùng truy cập một tuyến đường, **_router_** sẽ tìm kiếm component tương ứng trong cây component và hiển thị nó.

## Các tính năng

-   Hỗ trợ URL: Router cho phép bạn định nghĩa các tuyến đường dựa trên URL. Điều này giúp bạn tạo các ứng dụng web có thể truy cập được bằng URL.
-   Thay đổi tuyến đường: Router cho phép bạn thay đổi tuyến đường hiện tại bằng cách sử dụng các sự kiện như click hoặc submit. Điều này giúp bạn tạo các ứng dụng web có thể tương tác.
-   Bảo mật: Router cho phép bạn bảo vệ các tuyến đường bằng cách yêu cầu người dùng đăng nhập hoặc có quyền truy cập cụ thể.

## Cách sử dụng

-   Tải thư viện router bằng câu lệnh

Đây là câu lệnh để tải thư viện Router tại phiên bản v6

```Terminal
npm i -D react-router-dom
```

Nếu muốn update Router từ phiên bản v5 thì chúng ta sử dụng câu lệnh

```Terminal
npm i -D react-router-dom@latest
```

## Các bước sử dụng

Để tạo routing cho toàn trang, ta đi vào file js được sử dụng để render, ở đây trang của mình là index.js

-   Import BrowserRouter từ thư viện React-Router-Dom

```js
import { BrowserRouter } from "react-router-dom";
```

-   Cấu trúc lại đoạn mã của bạn như sau

```js
// Khi cấu trúc như thế này thì có nghĩa là chúng ta đã tạo ra một cơ chế định tuyến cho ứng dụng

// Một trang web chỉ có một định tuyến
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
```

---

# Layout

## Khái niệm

-   **_Layout_** trong React là một component được sử dụng để thiết kế và xác định cấu trúc cơ bản của ứng dụng của bạn. Nó xác định các phần chung của giao diện người dùng, như header, sidebar, footer, và content, và cách chúng được sắp xếp.

## Lợi ích

Layout có một số lợi ích quan trọng:

-   Consistency:**_Layout_** đảm bảo rằng giao diện người dùng của ứng dụng của bạn có tính nhất quán trên tất cả các trang. Giúp người dùng dễ dàng điều hướng ứng dụng và hiểu cấu trúc của nó.

-   Reusability: Bạn có thể tái sử dụng **_Layout_** trong các trang khác nhau của ứng dụng. Điều này giúp bạn tiết kiệm thời gian và công sức, đồng thời giúp giữ cho code của bạn DRY (Don't Repeat Yourself).

-   Maintainability:**_Layout_** giúp bạn dễ dàng duy trì code của mình. Bằng cách tập trung các phần chung của giao diện người dùng vào một component, bạn có thể dễ dàng thực hiện thay đổi cho toàn bộ ứng dụng.

-   Flexibility:**_Layout_** có thể linh hoạt để đáp ứng các nhu cầu khác nhau của các trang khác nhau. Bạn có thể dễ dàng thêm hoặc loại bỏ các phần khác nhau của **_layout_**, hoặc thay đổi vị trí của chúng, để tạo giao diện phù hợp với nội dung của từng trang.

5. Accessibility:**_Layout_** có thể được thiết kế để đáp ứng các yêu cầu về khả năng truy cập. Điều này có nghĩa là tất cả người dùng, kể cả người khuyết tật, có thể truy cập và sử dụng ứng dụng của bạn.
