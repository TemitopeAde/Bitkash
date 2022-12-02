import { Box, Container, Link, Stack } from "@mui/material";
import React from "react";
import Logo from "../assets/icons/header.png";
import instagram from "../assets/icons/instagram.png";
import phone from "../assets/icons/phone.png";
import facebook from "../assets/icons/facebook.png";
import "./footer.css";

const Footer = () => {
  return (
    <Box className="footer">
      <Container>
        <Box className="footer-grid">
          <Box>
            <Stack spacing={5}>
              <div>
                <svg
                  width="261"
                  height="49"
                  viewBox="0 0 261 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.8213 24.0366C42.8213 31.8821 36.4673 38.2354 28.6272 38.2354C20.7871 38.2354 14.4221 31.8793 14.4221 24.0366C14.4221 16.1939 20.7843 9.82678 28.6272 9.82678C36.4673 9.82953 42.8213 16.1939 42.8213 24.0366Z"
                    fill="white"
                  />
                  <path
                    d="M43.258 36.7323C43.3844 36.5729 44.8898 34.6218 46.1397 31.3847C46.1562 31.3517 46.1726 31.3077 46.1809 31.2748C46.6781 30.0986 47.0462 28.862 47.2907 27.576C47.5187 26.4163 47.6341 25.2045 47.6341 23.9789C47.6341 23.0033 47.5572 22.0361 47.4143 21.0962C47.3374 20.5659 47.2303 20.0465 47.1039 19.5326C47.0874 19.4749 47.0792 19.4145 47.0627 19.3568C46.9446 18.8704 46.8017 18.3895 46.6424 17.9113C46.6177 17.8344 46.5929 17.7602 46.5655 17.6915C46.3979 17.2216 46.2221 16.7654 46.0271 16.3203C45.9941 16.2433 45.9611 16.1774 45.9254 16.1004C45.7166 15.6552 45.4969 15.2101 45.2606 14.7814C45.2277 14.7319 45.2029 14.6715 45.1672 14.622C44.9145 14.1768 44.6453 13.7399 44.3678 13.3195C44.3513 13.303 44.3431 13.2947 44.3349 13.2782C44.0492 12.8578 43.747 12.4538 43.4283 12.0581C43.3954 12.0169 43.3706 11.9812 43.3432 11.9482C43.0245 11.5608 42.6949 11.2008 42.3597 10.838C42.302 10.7886 42.2498 10.7281 42.2004 10.6787C41.8653 10.3352 41.5191 10.0054 41.1593 9.68663C41.0933 9.63717 41.0329 9.57671 40.967 9.52725C40.6044 9.21672 40.228 8.91445 39.8407 8.62866C39.783 8.58744 39.7225 8.54347 39.6566 8.50225C39.2528 8.20822 38.8407 7.93891 38.4122 7.67786C38.3792 7.65312 38.3463 7.63664 38.3106 7.62015C37.8738 7.35909 37.4287 7.11452 36.9755 6.89743C36.9508 6.88094 36.926 6.8727 36.8986 6.85621C36.4453 6.63637 35.9728 6.43577 35.5031 6.25165C35.4371 6.22692 35.3684 6.20219 35.3025 6.17471C34.8493 5.99884 34.3768 5.8477 33.8988 5.71305C33.8136 5.68832 33.7394 5.66359 33.6543 5.6471C33.1763 5.51245 32.6956 5.40253 32.2093 5.31185C32.1242 5.29536 32.0418 5.27887 31.9648 5.26238C31.4594 5.17719 30.9567 5.103 30.443 5.05353C30.3853 5.05353 30.3166 5.04529 30.2589 5.04529C29.7205 4.99583 29.1738 4.96835 28.6189 4.96835C28.6189 4.96835 27.9706 4.98484 27.6602 5.00132C24.4324 5.16071 21.4161 6.128 18.8009 7.69984L20.7431 2.16816H6.3622L10.1449 5.87518C1.1675 13.4596 -0.571389 26.8203 6.44736 36.4877C7.26324 37.6061 8.14504 38.6229 9.10377 39.5407C8.41426 39.2054 7.73299 38.7575 7.07094 38.2134C6.41439 37.6666 5.78532 37.0208 5.18096 36.3036C4.88703 35.9408 4.59309 35.5644 4.3074 35.1687C3.1811 33.5803 2.21413 31.7227 1.47517 29.7276C0.928508 28.2382 0.516448 26.6664 0.263718 25.0863C0.0934002 24.0366 0.00824119 22.9786 0 21.9344C0 20.8846 0.0769178 19.8487 0.25273 18.8484C0.362612 18.2438 0.488977 17.6558 0.640066 17.0567C1.22794 14.6934 2.17842 12.4071 3.45581 10.2884C4.41453 8.69186 5.56555 7.19421 6.90062 5.81473L1.02465 0H26.8608C27.2124 0 27.575 0.0164879 27.9294 0.0329758C32.5527 0.21709 37.0744 1.59658 40.9477 4.14395C43.0575 5.53168 44.9145 7.19696 46.3347 9.10406C52.4607 17.293 51.4965 29.6205 43.258 36.7323Z"
                    fill="white"
                  />
                  <path
                    d="M56.1005 32.7642C54.9495 36.2459 53.0156 39.4995 50.3509 42.2474L56.2187 48.0732H30.3825C30.0309 48.0732 29.6765 48.0567 29.3249 48.0319C24.6934 47.8478 20.1799 46.4766 16.2983 43.9292C14.1886 42.5415 12.3398 40.868 10.9113 38.9691C4.79364 30.7719 5.74962 18.4389 14.0045 11.3244C12.5349 13.1821 11.5349 15.4272 10.8949 17.2106C10.8784 17.2436 10.8701 17.2875 10.8537 17.3205C10.568 18.068 10.3317 18.8347 10.1477 19.6233C10.1065 19.8157 10.0625 19.9668 10.0378 20.0767C10.0295 20.1262 10.0131 20.1784 10.0048 20.2361C9.99658 20.2856 9.98834 20.3131 9.98834 20.3131C9.74385 21.5332 9.60924 22.7945 9.60924 24.0888C9.60924 25.0726 9.68616 26.0316 9.82901 26.9714C9.91416 27.5018 10.0213 28.0212 10.1394 28.5433C10.1559 28.5927 10.1641 28.6532 10.1806 28.7109C10.307 29.1973 10.4498 29.6864 10.6092 30.1563C10.6339 30.2333 10.6586 30.3075 10.6861 30.3844C10.8454 30.8461 11.0295 31.2995 11.2245 31.7474C11.2575 31.8244 11.2904 31.8986 11.3262 31.9673C11.5267 32.4207 11.7465 32.8576 11.9827 33.2863C12.0157 33.344 12.0486 33.3962 12.0843 33.4539C12.3288 33.8908 12.598 34.3278 12.8837 34.7482C12.892 34.7647 12.9002 34.7812 12.9085 34.7894C13.2024 35.2099 13.5046 35.6221 13.8232 36.0178C13.848 36.0508 13.8727 36.0837 13.9084 36.1194C14.2188 36.5069 14.5485 36.8751 14.8918 37.2296C14.9413 37.2873 14.9935 37.3396 15.0429 37.389C15.3781 37.7325 15.7324 38.0623 16.0923 38.381C16.15 38.4387 16.2187 38.491 16.2764 38.5487C16.6472 38.8592 17.0153 39.1615 17.4109 39.439C17.4686 39.4885 17.529 39.5324 17.5867 39.5737C17.9905 39.8594 18.4026 40.137 18.8311 40.3898C18.8641 40.4145 18.9081 40.431 18.941 40.4558C19.3696 40.7086 19.8146 40.9531 20.2761 41.1785C20.3008 41.1867 20.3173 41.2032 20.353 41.2115C20.8063 41.4395 21.2678 41.6319 21.7485 41.816C21.8144 41.8407 21.8749 41.8655 21.9408 41.893C22.4023 42.0688 22.8748 42.22 23.3446 42.3629C23.4297 42.3793 23.5121 42.4041 23.589 42.4288C24.067 42.5552 24.5478 42.6734 25.0422 42.7641C25.1192 42.7805 25.2016 42.7888 25.2867 42.8053C25.784 42.8987 26.2867 42.9647 26.8086 43.0141C26.8663 43.0224 26.9267 43.0224 26.9844 43.0306C27.5311 43.0718 28.0778 43.1076 28.6327 43.1076C28.6327 43.1076 28.792 43.0993 28.9953 43.0911C29.0887 43.0911 29.204 43.0828 29.3057 43.0828C29.4073 43.0828 29.5062 43.0746 29.5914 43.0746C32.8192 42.907 35.8355 41.9479 38.4424 40.3678L36.5085 45.9078H50.8976L47.1067 42.1925C48.5104 41.0081 49.7383 39.6781 50.7795 38.2491C52.4524 35.9628 53.6529 33.3989 54.3671 30.7252C54.543 30.0519 54.6858 29.3704 54.8039 28.6917C55.7874 22.8907 54.5347 16.7105 50.8042 11.5745C49.9966 10.4643 49.1065 9.44755 48.1478 8.52148C48.8456 8.85674 49.5268 9.3129 50.1806 9.857C50.8372 10.4039 51.4745 11.0414 52.0706 11.7559C52.3728 12.1186 52.6585 12.4951 52.9442 12.8908C53.5073 13.6904 54.0293 14.5478 54.5072 15.4629C54.7435 15.9163 54.9688 16.389 55.1803 16.8671C55.6088 17.8261 55.9797 18.8264 56.2819 19.8432C56.4329 20.357 56.5675 20.8764 56.6857 21.3985C57.2818 24.0036 57.4411 26.7049 56.9961 29.2165C56.7818 30.4174 56.4879 31.6045 56.1005 32.7642Z"
                    fill="white"
                  />
                  <path
                    d="M34.9704 26.334C34.9073 25.9767 34.8139 25.6332 34.6463 25.3117C34.2177 24.4846 33.542 23.935 32.6794 23.6052C32.5338 23.5503 32.3882 23.5008 32.2426 23.4486C32.2481 23.4349 32.2508 23.4294 32.2536 23.4294C32.2673 23.4211 32.2811 23.4156 32.2948 23.4074C32.9376 23.1518 33.498 22.7808 33.9293 22.2285C34.2535 21.8136 34.4457 21.3436 34.5144 20.8243C34.5556 20.5055 34.5391 20.1867 34.487 19.868C34.421 19.4723 34.2837 19.1068 34.0776 18.7688C33.6079 17.9939 32.8662 17.5762 32.0503 17.2656C31.6575 17.1173 31.2482 17.0238 30.8279 16.9716C30.5861 16.9414 30.5889 16.9276 30.5889 16.6831C30.5889 16.084 30.5889 15.4822 30.5889 14.8831C30.5889 14.7183 30.5779 14.71 30.4186 14.71C30.1136 14.71 29.806 14.71 29.501 14.71C29.3197 14.71 29.3142 14.7155 29.3142 14.9024C29.3142 15.4987 29.3142 16.095 29.3142 16.6913C29.3142 16.7133 29.3142 16.7325 29.3115 16.749V16.8617H27.916V14.798C27.9022 14.732 27.861 14.7073 27.7731 14.7073C27.4517 14.7128 27.1303 14.7073 26.8089 14.71C26.6633 14.71 26.6578 14.7183 26.6578 14.8612C26.6578 15.4657 26.6578 16.0703 26.6578 16.6748C26.6578 16.8452 26.6578 16.8452 26.4875 16.8452C25.1167 16.8452 23.7459 16.8452 22.3751 16.8452C22.2296 16.8452 22.2241 16.8534 22.2213 16.9936C22.2213 17.4553 22.2213 17.9142 22.2213 18.3758C22.2213 18.5517 22.2323 18.5654 22.4164 18.5654C22.8147 18.5654 23.213 18.5654 23.6141 18.5682C23.702 18.5682 23.7926 18.5709 23.8778 18.5929C24.2322 18.6891 24.5288 19.0436 24.5261 19.4668C24.5206 20.8353 24.5234 22.201 24.5234 23.5695C24.5234 25.2348 24.5234 26.9001 24.5206 28.5653C24.5206 28.6808 24.5124 28.8017 24.4739 28.9061C24.3146 29.343 23.9712 29.5216 23.5262 29.5271C23.1306 29.5326 22.7378 29.5326 22.3422 29.5299C22.235 29.5299 22.2158 29.5793 22.2158 29.6728C22.2186 30.1289 22.2186 30.5879 22.2186 31.044C22.2186 31.2199 22.2186 31.2199 22.3916 31.2199C23.7597 31.2199 25.125 31.2199 26.493 31.2171C26.6551 31.2171 26.6551 31.2171 26.6551 31.3848C26.6551 31.9976 26.6578 32.6076 26.6523 33.2204C26.6523 33.3221 26.688 33.3578 26.7869 33.3551C27.1083 33.3523 27.4297 33.3551 27.7512 33.3523C27.916 33.3523 27.916 33.3496 27.916 33.1819C27.916 32.5884 27.916 31.9976 27.916 31.404V31.2007H29.3087V33.2506C29.3142 33.3111 29.3362 33.3523 29.4159 33.3523C29.7675 33.3496 30.1219 33.3496 30.4735 33.3523C30.5477 33.3523 30.5779 33.3139 30.5806 33.2452C30.5806 33.2039 30.5834 33.16 30.5834 33.116C30.5834 32.473 30.5834 31.8299 30.5834 31.1869C30.5834 31.1045 30.5971 31.0605 30.696 31.0385C31.1355 30.9423 31.5751 30.8462 32.0091 30.7225C32.5091 30.5796 32.9761 30.357 33.3964 30.0492C33.8634 29.7085 34.2452 29.2853 34.5364 28.7824C34.7891 28.3428 34.9292 27.8674 34.9924 27.37C35.0419 27.0292 35.0336 26.683 34.9704 26.334ZM27.8583 19.2662C28.4159 19.2057 28.9763 19.1782 29.5367 19.2277C29.99 19.2689 30.4268 19.3761 30.7922 19.6756C31.0806 19.9119 31.2399 20.2142 31.2784 20.5797C31.3361 21.1211 31.2125 21.6047 30.7757 21.9647C30.4488 22.234 30.0642 22.3714 29.6521 22.4483C29.0505 22.5638 28.4407 22.5033 27.8363 22.5198C27.7457 22.5225 27.7154 22.4896 27.7154 22.3989C27.7182 21.8987 27.7182 21.3986 27.7182 20.9012C27.7182 20.4093 27.7209 19.9174 27.7154 19.4256C27.7127 19.3129 27.7512 19.2799 27.8583 19.2662ZM31.5998 27.2023C31.4817 27.7959 31.141 28.2301 30.5916 28.4911C30.1933 28.6808 29.7702 28.7659 29.3307 28.8044C28.8335 28.8484 28.3418 28.8099 27.8473 28.7962C27.7457 28.7934 27.7154 28.7604 27.7154 28.6588C27.7209 28.0432 27.7182 27.4277 27.7182 26.8121C27.7182 26.2048 27.7209 25.5948 27.7154 24.9875C27.7154 24.8803 27.7484 24.8473 27.8528 24.8501C28.3583 24.8611 28.8692 24.8391 29.3719 24.883C30.0147 24.938 30.6383 25.0919 31.1328 25.559C31.3306 25.7459 31.4652 25.9712 31.5476 26.2296C31.652 26.5483 31.663 26.8781 31.5998 27.2023Z"
                    fill="#FF9924"
                  />
                  <path
                    d="M89.8839 27.4964C88.9059 26.2406 87.623 25.4876 86.0929 25.1853C87.4994 24.7594 88.6285 23.979 89.4828 22.9265C90.3124 21.8466 90.7382 20.5413 90.7382 18.9337C90.7382 17.5789 90.3866 16.3726 89.7081 15.3174C89.0048 14.2374 88.0021 13.4075 86.6698 12.8057C85.3155 12.2039 83.7332 11.9016 81.8734 11.9016H70.627V16.3231H81.096C82.4009 16.3231 83.4063 16.6254 84.1095 17.2272C84.8128 17.829 85.1644 18.6589 85.1644 19.7636C85.1644 20.8683 84.8128 21.6982 84.1095 22.2752C83.4063 22.877 82.4009 23.1546 81.096 23.1546H76.0991V19.3321H70.627V39.1726H82.3761C84.2332 39.1726 85.8402 38.8456 87.1972 38.2437C88.5515 37.6172 89.5817 36.7379 90.2849 35.6332C91.0129 34.5285 91.3645 33.2479 91.3645 31.7915C91.3645 30.1839 90.8618 28.7522 89.8839 27.4964ZM84.7111 33.7728C83.9585 34.3993 82.9283 34.7263 81.5987 34.7263H76.1018V27.37H81.4998C82.8047 27.37 83.8596 27.697 84.6644 28.3758C85.4419 29.0298 85.8182 29.9586 85.8182 31.1375C85.8155 32.2669 85.4391 33.1462 84.7111 33.7728Z"
                    fill="white"
                  />
                  <path
                    d="M96.1083 14.0367C95.471 13.4267 95.1523 12.6655 95.1523 11.7532C95.1523 10.8408 95.471 10.0796 96.1083 9.46958C96.7456 8.85678 97.5478 8.55176 98.5093 8.55176C99.4735 8.55176 100.273 8.85953 100.91 9.46958C101.548 10.0824 101.869 10.8436 101.869 11.7532C101.869 12.6655 101.55 13.4267 100.91 14.0367C100.273 14.6495 99.4735 14.9546 98.5093 14.9546C97.5478 14.9546 96.7456 14.6495 96.1083 14.0367ZM101.204 17.5322V39.1725H95.7375V17.5322H101.204Z"
                    fill="white"
                  />
                  <path
                    d="M112.957 17.5238V12.1763H107.46V17.5266H104.875V22.0223H117.805V17.5238H112.957ZM115.264 34.5531C114.435 34.5531 113.833 34.4019 113.482 34.0749C113.13 33.7479 112.954 33.2203 112.954 32.4921V25.0341H107.457V32.4426C107.457 36.9383 109.768 39.1724 114.361 39.1724H117.8V34.5503H115.264V34.5531Z"
                    fill="white"
                  />
                  <path
                    d="M132.06 28.4004L141.575 17.5266H134.472L130.28 22.8247V33.8002L134.548 39.1752H141.652L132.06 28.4004ZM127.217 26.7159V10.2665H121.744V39.1725H127.217V29.9558L127.266 30.0299V26.6417L127.217 26.7159Z"
                    fill="white"
                  />
                  <path
                    d="M160.153 17.5239V20.6126C159.425 19.6343 158.472 18.8044 157.266 18.1504C156.036 17.4964 154.629 17.1721 153.022 17.1721C151.165 17.1721 149.509 17.6228 148 18.5544C146.495 19.4584 145.314 20.7637 144.435 22.4482C143.58 24.1547 143.13 26.0893 143.13 28.274C143.13 30.4833 143.583 32.4426 144.435 34.1519C145.314 35.8584 146.492 37.1912 148 38.12C149.506 39.0488 151.165 39.5269 152.973 39.5269C154.604 39.5269 156.011 39.1999 157.266 38.5212C158.497 37.8672 159.475 37.0153 160.153 36.0095V39.1752H165.678V17.5239H160.153ZM159.376 31.7639C158.873 32.7174 158.17 33.4457 157.266 33.9485C156.387 34.4761 155.434 34.7262 154.429 34.7262C153.423 34.7262 152.495 34.4487 151.643 33.9485C150.764 33.4209 150.061 32.668 149.533 31.6897C148.981 30.7114 148.731 29.5792 148.731 28.274C148.731 26.9687 148.981 25.8365 149.533 24.883C150.061 23.9541 150.764 23.2259 151.618 22.723C152.473 22.2202 153.401 21.9948 154.431 21.9948C155.437 21.9948 156.39 22.2449 157.269 22.7478C158.173 23.2507 158.876 23.9789 159.379 24.9324C159.906 25.886 160.156 27.0181 160.156 28.3482C160.153 29.6809 159.903 30.8103 159.376 31.7639Z"
                    fill="white"
                  />
                  <path
                    d="M174.537 38.5679C173.131 37.9304 172.018 37.0647 171.197 35.971C170.375 34.8773 169.928 33.6655 169.851 32.3382H175.358C175.46 33.1709 175.872 33.8606 176.589 34.4074C177.306 34.9543 178.196 35.2291 179.265 35.2291C180.306 35.2291 181.119 35.0202 181.704 34.6026C182.289 34.1876 182.583 33.6517 182.583 33.0005C182.583 32.297 182.226 31.7694 181.509 31.4176C180.792 31.0659 179.655 30.6812 178.092 30.2662C176.477 29.876 175.158 29.4721 174.128 29.0571C173.1 28.6422 172.213 28.0019 171.471 27.1418C170.73 26.2817 170.359 25.1248 170.359 23.6656C170.359 22.4675 170.705 21.3738 171.394 20.3845C172.084 19.3952 173.073 18.6148 174.361 18.0405C175.65 17.4689 177.166 17.1831 178.91 17.1831C181.487 17.1831 183.545 17.8261 185.08 19.1149C186.616 20.4037 187.462 22.1432 187.619 24.3306H182.385C182.306 23.4705 181.949 22.789 181.311 22.2779C180.674 21.7695 179.82 21.5167 178.754 21.5167C177.765 21.5167 177.001 21.698 176.468 22.0635C175.935 22.429 175.669 22.9374 175.669 23.5886C175.669 24.3169 176.034 24.872 176.762 25.2484C177.493 25.6249 178.622 26.0096 180.16 26.3998C181.723 26.79 183.012 27.194 184.025 27.6089C185.039 28.0266 185.918 28.6697 186.66 29.5435C187.402 30.4174 187.786 31.5688 187.811 33.0005C187.811 34.2508 187.465 35.372 186.775 36.3613C186.086 37.3505 185.097 38.1255 183.808 38.686C182.52 39.2439 181.015 39.5269 179.298 39.5269C177.529 39.5242 175.941 39.2054 174.537 38.5679Z"
                    fill="white"
                  />
                  <path
                    d="M197.764 20.2362V10.2665H192.316V39.1725H197.764V27.2188C197.764 26.7928 197.789 26.3889 197.838 26.0124V20.1372C197.813 20.162 197.789 20.2114 197.764 20.2362ZM211.848 21.4672C211.12 20.0603 210.139 19.0051 208.859 18.3016C207.579 17.5734 206.123 17.2216 204.491 17.2216C203.162 17.2216 201.956 17.447 200.852 17.9251V22.1432C201.379 21.9426 202.005 21.8657 202.659 21.8657C204.14 21.8657 205.296 22.3164 206.175 23.2479C207.03 24.1768 207.455 25.5068 207.455 27.216V39.1697H212.928V26.4658C212.928 24.5312 212.551 22.8495 211.848 21.4672Z"
                    fill="white"
                  />
                  <path
                    d="M222.919 33.9485C222.293 33.3467 221.488 33.0444 220.535 33.0444C219.557 33.0444 218.727 33.3467 218.101 33.9485C217.447 34.5751 217.147 35.3308 217.147 36.2348C217.147 37.1637 217.45 37.9166 218.101 38.5212C218.727 39.1477 219.557 39.45 220.535 39.45C221.488 39.45 222.293 39.1477 222.919 38.5212C223.545 37.9193 223.848 37.1664 223.848 36.2348C223.848 35.3308 223.548 34.5778 222.919 33.9485Z"
                    fill="white"
                  />
                  <path
                    d="M233.44 9.46414C232.814 8.86234 232.009 8.56006 231.031 8.56006C230.078 8.56006 229.273 8.86234 228.647 9.46414C227.993 10.0907 227.693 10.8464 227.693 11.7505C227.693 12.6545 227.996 13.4322 228.647 14.0368C229.273 14.6386 230.078 14.9656 231.031 14.9656C232.009 14.9656 232.814 14.6386 233.44 14.0368C234.067 13.435 234.393 12.6545 234.393 11.7505C234.393 10.8436 234.067 10.0907 233.44 9.46414ZM228.268 17.524V39.1726H233.74V17.524H228.268Z"
                    fill="white"
                  />
                  <path
                    d="M258.546 22.4978C257.568 20.7913 256.236 19.4833 254.554 18.5545C253.274 17.8757 251.868 17.4251 250.387 17.2739V22.1461C251.291 22.4236 252.068 22.899 252.772 23.6025C253.851 24.7072 254.403 26.29 254.403 28.3483C254.403 29.7305 254.126 30.9094 253.601 31.8657C253.098 32.8192 252.395 33.5475 251.516 34.0256C251.14 34.2262 250.763 34.4021 250.387 34.5038V39.4254C251.843 39.2495 253.2 38.8236 254.455 38.1448C256.161 37.216 257.518 35.9107 258.524 34.2015C259.502 32.5197 260.005 30.5604 260.005 28.351C260.005 26.1417 259.524 24.1796 258.546 22.4978ZM239.215 22.4978C238.237 24.1796 237.759 26.1389 237.759 28.3483C237.759 30.5577 238.237 32.517 239.19 34.1987C240.143 35.9052 241.451 37.2133 243.107 38.1421C244.387 38.8703 245.819 39.2962 247.376 39.4474V34.5999C246.398 34.3499 245.544 33.8717 244.841 33.094C243.811 31.9894 243.311 30.4065 243.311 28.3483C243.311 26.29 243.838 24.7072 244.893 23.6025C245.596 22.8496 246.451 22.3467 247.379 22.1214V17.2739C245.898 17.4251 244.517 17.8757 243.236 18.5545C241.522 19.4833 240.193 20.7913 239.215 22.4978Z"
                    fill="white"
                  />
                </svg>
              </div>

              <h6 className="text">
                Bitkash.io is a fast-rising global cryptocurrency broker that is
                dedicated to Bitcoin. Recognizing the bureaucracy of
                cryptocurrency, Bitkash.io believes that everyone must be a part
                of the decentralized blockchain
              </h6>

              <Stack className="social-icons" spacing={3} direction="row">
                <Link to="/">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                      stroke="#FF9924"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                      stroke="#FF9924"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.6361 7H17.6477"
                      stroke="#FF9924"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link to="/">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z"
                      stroke="#FF9924"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                    />
                    <path
                      d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z"
                      stroke="#FF9924"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link to="/">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                      stroke="#FF9924"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </Link>
              </Stack>
            </Stack>
          </Box>
          <Box>
            <Stack spacing={1} className="footer-flex-mobile">
              <Link style={{ color: " #FF9924", fontWeight: "700" }} to="/">
                Buy Bitcoin
              </Link>
              <Link to="/">Get started</Link>
              <Link to="/">Chat with us</Link>
              <Link to="/">Why Bitcash</Link>
            </Stack>
          </Box>
          <Box className="hide">
            <Stack spacing={1}>
              <Link style={{ color: "#FF9924", fontWeight: "700" }} to="/">
                Bitkash
              </Link>
              <Link to="/">FAQ</Link>
              <Link to="/">About Us</Link>
              <Link to="/">Delivery Policy</Link>
            </Stack>
          </Box>
          <Box className="hide">
            <Stack spacing={1}>
              <Link style={{ color: "#FF9924", fontWeight: "700" }} to="/">
                Legal Terms
              </Link>
              <Link to="/">Privacy policy</Link>
              <Link to="/">Refund and Cancellation Policy</Link>
              <Link to="/">Risk and Safety Policy</Link>
            </Stack>
          </Box>
          <Box className="hide">
            <Stack spacing={1}>
              <Link style={{ color: "#FF9924", fontWeight: "700" }} to="/">
                Contact
              </Link>
              <a href="mailto:contact@bitkash.com">contact@bitkash.com</a>
              <Link to="/">No 14, London, UK</Link>
              <a href="tel:+123456789">123456789</a>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
