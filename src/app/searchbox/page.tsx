import React from "react";

const Searchbox = () => {
    return(
        <div className=" flex flex-col justify-center items-center my-8">
        <div className="font-primary text-center">
          <div>
            <p className="mb-4" >!موردی با این مشخصات پیدا نکردیم</p>
            <div className="relative flex-grow mx-3">
                <div className="absolute top-2 left-4 flex items-center pr-3 pointer-events-none">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                      fill="#353535"
                    />
                    <path
                      d="M22.0004 22.7499C21.8104 22.7499 21.6204 22.6799 21.4704 22.5299L19.4704 20.5299C19.1804 20.2399 19.1804 19.7599 19.4704 19.4699C19.7604 19.1799 20.2404 19.1799 20.5304 19.4699L22.5304 21.4699C22.8204 21.7599 22.8204 22.2399 22.5304 22.5299C22.3804 22.6799 22.1904 22.7499 22.0004 22.7499Z"
                      fill="#353535"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="جستجو"
                  className="text-right text-sm w-[409px] h-[40px] border rounded-lg focus:outline-none focus:ring focus:border-blue-300 pr-3 mb-5 "
                />
              </div>
            <div className="pl-4">
                <svg width="390" height="345" viewBox="0 0 390 345" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1748_45952)">
                        <path d="M195 344.976C290.206 344.976 367.386 267.756 367.386 172.5C367.386 77.2441 290.206 0.0239258 195 0.0239258C99.7941 0.0239258 22.6143 77.2441 22.6143 172.5C22.6143 267.756 99.7941 344.976 195 344.976Z" fill="white"/>
                        <path d="M195 344.976C290.206 344.976 367.386 267.756 367.386 172.5C367.386 77.2441 290.206 0.0239258 195 0.0239258C99.7941 0.0239258 22.6143 77.2441 22.6143 172.5C22.6143 267.756 99.7941 344.976 195 344.976Z" fill="#E5F2E9"/>
                        <path d="M82.9659 231.081L0.525391 230.831L0.864591 118.779L57.8703 118.952L83.2279 144.477L82.9659 231.081Z" fill="white"/>
                        <path d="M57.8702 118.952L57.793 144.4L83.2278 144.477L57.8702 118.952Z" fill="#CAE4D3"/>
                        <path d="M83.7464 144.445C83.7432 144.399 83.7342 144.354 83.7196 144.31C83.7138 144.294 83.7096 144.277 83.7023 144.261C83.6777 144.203 83.643 144.151 83.5999 144.107L58.2422 118.581C58.1976 118.537 58.1455 118.502 58.0884 118.476C58.0724 118.469 58.0561 118.463 58.0396 118.458C57.9955 118.443 57.9496 118.434 57.903 118.431C57.892 118.431 57.882 118.424 57.871 118.424L0.865855 118.253C0.726595 118.253 0.593039 118.309 0.494568 118.407C0.396097 118.506 0.340776 118.639 0.340776 118.779L0 230.83C0 230.969 0.0553206 231.103 0.153792 231.201C0.252263 231.3 0.385819 231.355 0.525079 231.355L82.9624 231.607C83.1017 231.607 83.2352 231.551 83.3337 231.453C83.4322 231.354 83.4875 231.221 83.4875 231.081L83.75 144.477C83.7527 144.467 83.7469 144.457 83.7464 144.445ZM58.3887 120.222L70.098 132.004L81.9616 143.946L58.3194 143.874L58.3887 120.222ZM1.05016 230.308L1.38621 119.306L57.3412 119.475L57.2661 144.398C57.2661 144.537 57.3214 144.671 57.4199 144.77C57.5184 144.868 57.6519 144.923 57.7912 144.923L82.7009 144.999L82.4421 230.553L1.05016 230.308Z" fill="#353535"/>
                        <path d="M251.031 226.598L138.61 226.257L139.073 73.4546L216.809 73.6905L251.389 108.498L251.031 226.598Z" fill="white"/>
                        <path d="M216.809 73.6909L216.704 108.394L251.389 108.499L216.809 73.6909Z" fill="#CAE4D3"/>
                        <path d="M251.908 108.467C251.905 108.421 251.896 108.376 251.881 108.332C251.876 108.315 251.871 108.299 251.864 108.28C251.839 108.223 251.805 108.171 251.762 108.126L217.182 73.3182C217.138 73.2743 217.085 73.2387 217.028 73.2131C217.012 73.2058 216.996 73.2016 216.979 73.1958C216.935 73.1806 216.889 73.1712 216.843 73.168C216.832 73.168 216.822 73.1617 216.811 73.1617L139.075 72.9258C138.935 72.9258 138.802 72.9811 138.703 73.0797C138.605 73.1782 138.549 73.3118 138.549 73.4511L138.087 226.253C138.087 226.393 138.142 226.526 138.241 226.625C138.339 226.723 138.473 226.779 138.612 226.779L251.031 227.12C251.171 227.12 251.304 227.064 251.403 226.966C251.501 226.867 251.556 226.734 251.556 226.594L251.914 108.495C251.914 108.489 251.908 108.479 251.908 108.467ZM217.33 74.9605L250.122 107.969L217.23 107.87L217.33 74.9605ZM139.137 225.733L139.597 73.9817L216.283 74.2145L216.178 108.392C216.178 108.531 216.233 108.665 216.331 108.763C216.43 108.862 216.563 108.917 216.703 108.917L250.862 109.022L250.508 226.071L139.137 225.733Z" fill="#353535"/>
                        <path d="M389.213 231.081L306.772 230.831L307.112 118.779L364.117 118.952L389.475 144.477L389.213 231.081Z" fill="white"/>
                        <path d="M364.117 118.952L364.04 144.4L389.475 144.477L364.117 118.952Z" fill="#CAE4D3"/>
                        <path d="M389.994 144.446C389.991 144.4 389.982 144.354 389.968 144.311C389.962 144.294 389.957 144.277 389.95 144.261C389.925 144.204 389.891 144.152 389.848 144.107L364.49 118.581C364.445 118.537 364.393 118.502 364.336 118.476C364.32 118.469 364.304 118.464 364.287 118.458C364.243 118.443 364.197 118.434 364.151 118.431C364.14 118.431 364.13 118.424 364.119 118.424L307.113 118.251C306.974 118.251 306.84 118.307 306.742 118.405C306.644 118.504 306.588 118.637 306.588 118.777L306.249 230.829C306.249 230.969 306.304 231.102 306.403 231.201C306.501 231.299 306.635 231.355 306.774 231.355L389.215 231.605C389.354 231.605 389.487 231.549 389.586 231.451C389.684 231.352 389.74 231.219 389.74 231.079L390.002 144.475C390 144.467 389.994 144.457 389.994 144.446ZM364.638 120.222L376.343 132.004L388.209 143.946L364.567 143.875L364.638 120.222ZM307.3 230.308L307.636 119.306L363.591 119.476L363.516 144.398C363.516 144.538 363.571 144.671 363.669 144.77C363.768 144.868 363.901 144.924 364.041 144.924L388.95 144.999L388.692 230.553L307.3 230.308Z" fill="#353535"/>
                        <path d="M251.558 109.751C238.158 94.3576 219.195 84.9205 198.841 83.5153C178.486 82.1101 158.408 88.8518 143.021 102.258C117.315 124.657 109.416 161.897 123.815 192.829C126.707 199.026 130.414 204.809 134.838 210.023L135.784 211.144L65.3222 285.96C64.0337 287.348 63.3461 289.19 63.4093 291.083C63.4725 292.977 64.2814 294.768 65.6596 296.067C67.0378 297.367 68.8735 298.068 70.7663 298.018C72.6592 297.969 74.4556 297.172 75.7639 295.802L146.208 220.998L147.385 221.88C162.586 233.288 181.47 238.664 200.398 236.971C219.325 235.278 236.957 226.636 249.895 212.71C262.832 198.784 270.161 180.56 270.469 161.55C270.776 142.54 264.041 124.088 251.56 109.751H251.558ZM255.976 164.612C254.885 180.419 247.846 195.224 236.278 206.044C224.71 216.864 209.473 222.895 193.637 222.921C192.175 222.921 190.707 222.868 189.235 222.763C178.956 222.065 169.008 218.84 160.273 213.373C151.538 207.907 144.286 200.369 139.161 191.426C134.035 182.484 131.194 172.415 130.89 162.111C130.586 151.807 132.827 141.587 137.416 132.358C142.005 123.129 148.8 115.175 157.197 109.202C165.594 103.229 175.334 99.422 185.555 98.1178C195.775 96.8137 206.158 98.053 215.785 101.726C225.412 105.399 233.984 111.391 240.742 119.173C246.155 125.364 250.289 132.568 252.904 140.367C255.518 148.167 256.562 156.407 255.976 164.612Z" fill="#417F56"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1748_45952">
                        <rect width="390" height="345" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg></div>
        </div>
      </div>
    </div>
    )
}

export default Searchbox;