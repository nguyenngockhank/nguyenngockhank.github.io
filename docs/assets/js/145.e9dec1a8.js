(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{1244:function(t,n,c){t.exports=c.p+"assets/img/full-kubernetes-model-architecture.6c6c5d1e.png"},1736:function(t,n,c){"use strict";c.r(n);var e=c(7),h=Object(e.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"kubernetes-k8s-notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-k8s-notes"}},[t._v("#")]),t._v(" Kubernetes (K8S) notes")]),t._v(" "),e("h2",{attrs:{id:"architecture"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[t._v("#")]),t._v(" Architecture")]),t._v(" "),e("p",[e("img",{attrs:{src:c(1244),alt:"img"}})]),t._v(" "),e("p",[t._v("https://xuanthulab.net/kubernetes/")]),t._v(" "),e("h3",{attrs:{id:"pod"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pod"}},[t._v("#")]),t._v(" Pod")]),t._v(" "),e("p",[t._v("Kubernetes không chạy các container một cách trực tiếp, thay vào đó nó bọc "),e("code",[t._v("một")]),t._v(" hoặc "),e("code",[t._v("vài container")]),t._v(" vào với nhau trong một cấu trúc gọi là "),e("strong",[t._v("POD")]),t._v(". Các container cùng một pod thì chia sẻ với nhau tài nguyên và mạng cục bộ của pod.")]),t._v(" "),e("h3",{attrs:{id:"replicaset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#replicaset"}},[t._v("#")]),t._v(" ReplicaSet")]),t._v(" "),e("p",[t._v("ReplicaSet là một điều khiển "),e("strong",[t._v("Controller")]),t._v(" - nó đảm bảo ổn định các nhân bản (số lượng và tình trạng của POD, replica) khi đang chạy.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/xuanthulabnet/learn-kubernetes/master/imgs/kubernetes052.png",alt:"img"}})]),t._v(" "),e("h3",{attrs:{id:"horizontalpodautoscaler-hpa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#horizontalpodautoscaler-hpa"}},[t._v("#")]),t._v(" HorizontalPodAutoscaler (HPA)")]),t._v(" "),e("p",[t._v("Horizontal Pod Autoscaler là chế độ tự động scale (nhân bản POD) dựa vào mức độ hoạt động của CPU đối với POD, nếu một POD quá tải - nó có thể nhân bản thêm POD khác và ngược lại - số nhân bản dao động trong khoảng min, max cấu hình")]),t._v(" "),e("h3",{attrs:{id:"deployment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[t._v("#")]),t._v(" Deployment")]),t._v(" "),e("p",[t._v("Deployment quản lý một nhóm các Pod - các Pod được nhân bản, nó tự động thay thế các Pod bị lỗi, không phản hồi bằng pod mới nó tạo ra. Như vậy, deployment đảm bảo ứng dụng của bạn có một (hay nhiều) Pod để phục vụ các yêu cầu.")]),t._v(" "),e("p",[t._v("Deployment sử dụng mẫu Pod (Pod template - chứa định nghĩa / thiết lập về Pod) để tạo các Pod (các nhân bản replica), khi template này thay đổi, các Pod mới sẽ được tạo để thay thế Pod cũ ngay lập tức.")]),t._v(" "),e("h3",{attrs:{id:"service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#service"}},[t._v("#")]),t._v(" Service")]),t._v(" "),e("p",[t._v("Service (micro-service) là một đối tượng trừu tượng nó xác định ra một nhóm các POD và chính sách để truy cập đến POD đó. Nhóm cá POD mà Service xác định thường dùng kỹ thuật "),e("code",[t._v("Selector")]),t._v(" (chọn các POD thuộc về Service theo "),e("code",[t._v("label")]),t._v(" của POD).")]),t._v(" "),e("p",[t._v("Cũng có thể hiểu Service là một dịch vụ mạng, tạo cơ chế cân bằng tải (load balancing) truy cập đến các điểm cuối (thường là các Pod) mà Service đó phục vụ.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/xuanthulabnet/learn-kubernetes/master/imgs/kubernetes053.png",alt:"SERVICE"}})]),t._v(" "),e("p",[t._v("Các POD được quản lý trong Kubernetes, trong vòng đời của nó chỉ diễn ra theo hướng - được tạo ra, chạy và khi nó kết thúc thì bị xóa và khởi tạo POD mới thay thế. ! Có nghĩa ta không thể có tạm dừng POD, chạy lại POD đang dừng ...")]),t._v(" "),e("p",[t._v("Mặc dù mỗi POD khi tạo ra nó có một IP để liên lạc, tuy nhiên vấn đề là mỗi khi POD thay thế thì là một IP khác, nên các dịch vụ truy cập không biết IP mới nếu ta cấu hình nó truy cập đến POD nào đó cố định. Để giải quết vấn đề này sẽ cần đến Service.")]),t._v(" "),e("h3",{attrs:{id:"headless-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#headless-service"}},[t._v("#")]),t._v(" Headless Service")]),t._v(" "),e("p",[t._v("Các Service trên có một địa chỉ IP riêng của Service, nó dùng cơ chế cân bằng tải để liên kết với các POD. Tuy nhiên nếu nuốn không dùng cơ chế cân bằng tải, mỗi lần truy cập tên Service nó truy cập thẳng tới IP của PO thì dùng loại Headless Service.")]),t._v(" "),e("p",[t._v("Một Headless Service (Service không IP) nó liên kết thẳng với IP của POD, có nghĩa bạn sẽ không tương tác trực tiếp với POD qua proxy.")]),t._v(" "),e("h3",{attrs:{id:"ingress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ingress"}},[t._v("#")]),t._v(" Ingress")]),t._v(" "),e("p",[t._v("Ingress là thành phần được dùng để điều hướng các yêu cầu traffic giao thức HTTP và HTTPS từ bên ngoài (interneet) vào các dịch vụ bên trong Cluster.")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/xuanthulabnet/learn-kubernetes/master/imgs/kubernetes047.png",alt:"img"}})]),t._v(" "),e("p",[t._v("Ingress chỉ để phục vụ các cổng, yêu cầu HTTP, HTTPS còn các loại cổng khác, giao thức khác để truy cập được từ bên ngoài thì dùng Service với kiểu NodePort và LoadBalancer")]),t._v(" "),e("p",[t._v("Để Ingress hoặt động, hệ thồng cần một điều khiển ingress trước (Ingress controller), có nhiều loại để chọn sử dụng (tham khảo Ingress Controller)")]),t._v(" "),e("p",[t._v("Nếu chọn Ngix Ingress Controller thì cài đặt theo: NGINX Ingress Controller for Kubernetes.")]),t._v(" "),e("p",[t._v("Phần này, chọn loại HAProxy Ingress Controller - HAProxy Ingress Controller")]),t._v(" "),e("h3",{attrs:{id:"daemonset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#daemonset"}},[t._v("#")]),t._v(" DaemonSet")]),t._v(" "),e("p",[t._v("DaemonSet (ds) đảm bảo chạy trên mỗi NODE một bản copy của POD. Triển khai DaemonSet khi cần ở mỗi máy (Node) một POD, thường dùng cho các ứng dụng như thu thập log, tạo ổ đĩa trên mỗi Node .")]),t._v(" "),e("h3",{attrs:{id:"job"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#job"}},[t._v("#")]),t._v(" Job")]),t._v(" "),e("p",[t._v("Job có chức năng tạo các POD đảm bảo nó chạy và kết thúc thành công.\nKhi các POD do Job tạo ra chạy và kết thúc thành công thì Job đó hoàn thành.\nKhi bạn xóa Job thì các Pod nó tạo cũng xóa theo.\nMột Job có thể tạo các Pod chạy tuần tự hoặc song song.\nSử dụng Job khi muốn thi hành một vài chức năng hoàn thành xong thì dừng lại (ví dụ backup, kiểm tra ...)\nKhi Job tạo Pod, Pod chưa hoàn thành nếu Pod bị xóa, lỗi Node ... nó sẽ thực hiện tạo Pod khác để thi hành tác vụ.")]),t._v(" "),e("h3",{attrs:{id:"cronjob"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cronjob"}},[t._v("#")]),t._v(" CronJob")]),t._v(" "),e("p",[t._v("CronJob (cj) - chạy các Job theo một lịch định sẵn. Việc lên lịch cho CronJob khai báo giống Cron của Linux.")]),t._v(" "),e("h3",{attrs:{id:"persistent-volume-pv-persistentvolumeclaim-pvc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#persistent-volume-pv-persistentvolumeclaim-pvc"}},[t._v("#")]),t._v(" Persistent Volume (pv) & PersistentVolumeClaim (pvc)")]),t._v(" "),e("p",[t._v("PersistentVolume (pv) là một phần không gian lưu trữ dữ liệu trong cluster, các PersistentVolume giống với Volume bình thường tuy nhiên nó tồn tại độc lập với POD (pod bị xóa PV vẫn tồn tại), có nhiều loại PersistentVolume có thể triển khai như NFS, Clusterfs")]),t._v(" "),e("p",[t._v("PersistentVolumeClaim (pvc) là yêu cầu sử dụng không gian lưu trữ (sử dụng PV). Hình dung PV giống như Node, PVC giống như POD. POD chạy nó sử dụng các tài nguyên của NODE, PVC hoạt động nó sử dụng tài nguyên của PV.")]),t._v(" "),e("p",[t._v("https://stackoverflow.com/questions/45079988/ingress-vs-load-balancer")])])}),[],!1,null,null,null);n.default=h.exports}}]);