



### belajar react typescript

#### create project 

    * npm create vite@latest app --template react-ts
    * cd app
    * npm install
    * npm run dev



### kesimpulan dan next steps 


    * React + typescript memastikan kode lebih aman dan mudahbb di kelola
    * props dan state di ketik secara explisit
    * event handler punya tipe yang jelas 
    * fetch API lebih aman dengan tipe data yang sesuai
    * React router bisa di kombinasikan dengan typescript
    * react router bisa di kombinasikan dengan typescritp



### instalasi redux

    * npm install @redux/toolkit react-redux
    * struktur folder

    * 📂 src/
        ┣ 📂 redux/         → Folder Redux
        ┃ ┣ 📄 store.ts     → Store utama Redux
        ┃ ┣ 📂 slices/      → Tempat untuk state management
        ┃ ┃ ┣ 📄 counterSlice.ts → Contoh slice untuk counter
        ┣ 📂 components/    → Komponen React
        ┣ 📄 App.tsx        → Komponen utama
        ┣ 📄 main.tsx       → Entry point aplikasi



    * setup redux store
    * membuaat slice redux
    * menghubungkan store ke react
    * menggunakan redux di komponen react
    * menampilkan komponen di app.tsx
    *


    * apa itu redux
        -> redux adalah state management yang di gunakan dalam aplikasi react untuk mengelola state global
        -> redux membantu menangani state kompleks yang harus di akses oleh banyak komponen tanpa perlu meneruskan prop berulang kali (prop drilling)

    * kenapa reux  di perlukan
        -> dalam apliaski react biasa, state di kelola menggunakan useState atau useContext, namun seiring bertambahnya fitur aplikasi, state bisa menjadi sulit di kelola


    * cara kerja redux (alur  data)
        -> redux memiliki alur kerja arah yang disebut unidirectional data flow, ada 3 bagian utama dalam redux
            1. store    => tempat menyimpan semua state global
            2. action   => object yg berisi informasi tentang perubahan yg ingin di lakukan pada state
            3. reducer  => fungsi yg menerima state dan action lalu mengembalikan state baru

            * alur kerja redux
                1. komponen mengirim action menggunakan dispatch(action)
                2. reducer menamgkap action, lalu memodifikasi state action yg di kirim
                3. store memperbarui state, lau react otomatis merender ulang komponen yg menggunaka state tersebtu
                
    * ilistrasi cara kerja redux
    * redux toolkitL redux versi modern

        * redux Toolkit: Redux versi modern modern
        * state mudah di kelola dengan createSlice
        * tidak perlu menulis reducer manual dengan switch-case
        * menggunakan configureStore() yang lebih simple

    * kesimpulan

        * redux membantu mengelola state global dengan lebih rpi
        * mengurangi prop driling -> data tidak perlu di teruskan secara manual
        * redux toolkit menyederhanakan redux tradisional
        *iden untuk aplikasi skal besar dengan state kompleks



### Redux MiddeWare: Mengelola action asyncronous di redux

    middleware di redux digunakan untuk menangani proses asyncronous seperti mengambil data dari API
    sebelum mengubah state di redux, middleware bertidak sebagai perantara atara dispatch(action) dan reducer

    * kenapa perlu middleware
    
        1. redux thunk: middleware untuk async actions
        2. konfigurasi store dengan thunk
        3. membuat slice dengan redux thunk
        4. menggunakan redux thunk di komponen
        5. menampilkan komponen di app.tsc

        * kesimpulan
        redux middleware digunakan untuk menangani proses async di redux
        redux-thunk memugnkinkan kita melakukan fetch api sebeum mengubah state
        createasync-thunk membuat API lebih simple & otomatis menangani status loading , success, dan error