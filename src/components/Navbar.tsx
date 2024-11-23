import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {cn} from '@/lib/utils';
import {navItems} from '@/lib/data/NavItem.tsx';
import {ModeToggle} from "@/components/ModeToggle";

export const Navbar: React.FC = () => {
    console.log('Navbar rendering');
    console.log('navItems:', navItems);
    const [active, setActive] = useState<string>('home');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{y: -100}}
            animate={{y: 0}}
            className={cn(
                'fixed top-0 left-0 right-0 flex justify-between items-center w-full px-28 py-4 transition-all duration-300',
                isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
            )}
        >
            <div className="flex items-center gap-2">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="layer1">
                        <path id="circle386"
                              d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z"
                              fill="#FF6600"/>
                        <g id="g391">
                            <path id="path387"
                                  d="M32.5895 16.2079C32.4982 16.1571 32.403 16.1166 32.3027 16.0771C32.1957 16.0467 32.0866 16.0162 31.9724 15.9859C31.8583 15.9555 31.7355 15.9351 31.6108 15.925C31.4878 15.9048 31.3603 15.9048 31.2266 15.9048C31.1049 15.9048 30.9816 15.9102 30.8548 15.9351C30.793 15.9406 30.7303 15.9554 30.6662 15.9655C30.6024 15.9751 30.5341 15.9959 30.4708 16.006C30.3423 16.0363 30.216 16.0769 30.0827 16.1317C30.0179 16.152 29.9488 16.1825 29.8804 16.2128C29.8126 16.2432 29.744 16.2737 29.6764 16.3041C29.5395 16.3751 29.4045 16.4531 29.2652 16.5342C29.1259 16.6153 28.985 16.7055 28.8416 16.8069C28.79 16.8475 28.7365 16.888 28.6857 16.9225C28.6819 17.03 28.6856 17.1313 28.6781 17.2418C28.6611 17.4831 28.6386 17.7375 28.6071 17.996C28.5766 18.2545 28.533 18.5221 28.4855 18.7979C28.4247 19.1547 28.3584 19.5105 28.2821 19.8665C28.2061 20.2223 28.1241 20.5741 28.0329 20.93C27.9416 21.2858 27.8413 21.6436 27.7355 21.9986C27.6295 22.3534 27.5185 22.7072 27.3971 23.062C27.2758 23.4168 27.143 23.7706 27.0063 24.1253C26.8697 24.4801 26.7253 24.8349 26.5736 25.1888C26.422 25.5426 26.2659 25.8984 26.099 26.2522C25.9321 26.606 25.755 26.9567 25.5729 27.3104C25.3913 27.6621 25.2084 28.0027 25.0278 28.3266C24.8471 28.65 24.6721 28.9582 24.4926 29.2542C24.313 29.5502 24.1344 29.8299 23.9559 30.0976C23.7775 30.3652 23.5943 30.6226 23.417 30.8619C23.2398 31.1011 23.0643 31.3262 22.888 31.538C22.7117 31.7499 22.538 31.9465 22.3628 32.13C22.1876 32.3135 22.0102 32.4828 21.8362 32.6379C21.6621 32.793 21.4916 32.9349 21.3186 33.0626C21.311 33.2228 21.3016 33.3819 21.3016 33.534C21.301 33.7398 21.3072 33.9385 21.3208 34.126C21.3303 34.274 21.3501 34.4129 21.3684 34.5507C21.3836 34.5453 21.3989 34.5411 21.4131 34.5305C21.6124 34.4494 21.8081 34.3744 22.0051 34.2842C22.2023 34.1929 22.3993 34.0936 22.5946 33.9912C22.7899 33.8889 22.9854 33.7824 23.1789 33.6668C23.3724 33.5513 23.563 33.4286 23.7548 33.2999C23.9466 33.1712 24.1415 33.0383 24.3317 32.8964C24.5217 32.7555 24.7116 32.6055 24.9 32.4514C25.0884 32.2973 25.2723 32.1361 25.4587 31.9699C25.6454 31.8026 25.8346 31.6263 26.0195 31.4458C26.2043 31.2664 26.3868 31.0829 26.5699 30.8903C26.7531 30.6977 26.9356 30.499 27.117 30.2932C27.2996 30.0864 27.4791 29.8786 27.6528 29.6698C27.8264 29.461 27.9932 29.2522 28.1581 29.0413C28.3229 28.8305 28.4822 28.6196 28.638 28.4078C28.7941 28.1949 28.9465 27.9779 29.0937 27.763C29.2407 27.5481 29.3848 27.3353 29.523 27.1183C29.6614 26.9014 29.7934 26.6824 29.9227 26.4635C30.0524 26.2445 30.1766 26.0245 30.2971 25.8036C30.4179 25.5826 30.5345 25.3616 30.6461 25.1386C30.7582 24.9156 30.868 24.6875 30.9709 24.4624C31.0741 24.2374 31.1701 24.0144 31.2643 23.7863C31.3576 23.5592 31.4482 23.3291 31.5332 23.1C31.6185 22.8709 31.7008 22.6398 31.7767 22.4087C31.8527 22.1776 31.9226 21.9454 31.9897 21.7123C32.0566 21.4791 32.1188 21.246 32.1772 21.0108C32.2359 20.7756 32.2896 20.5414 32.3393 20.3032C32.389 20.066 32.4366 19.8248 32.4778 19.5855C32.5356 19.248 32.5808 18.9226 32.6133 18.6063C32.6458 18.29 32.6619 17.9849 32.67 17.6899C32.6738 17.5419 32.6776 17.397 32.6757 17.255C32.6738 17.1121 32.6662 16.9732 32.6587 16.8354C32.6492 16.6985 32.6385 16.5637 32.6222 16.4319C32.6146 16.3508 32.5999 16.2778 32.5887 16.2018L32.5895 16.2079Z"
                                  fill="white"/>
                            <path id="path388"
                                  d="M26.4119 11.4827C26.2037 11.4827 25.9906 11.491 25.7781 11.5131C25.5659 11.5333 25.357 11.5535 25.141 11.5942C24.9249 11.6348 24.7082 11.6753 24.4893 11.73C24.2709 11.7808 24.0509 11.8466 23.8285 11.9186C23.6062 11.9896 23.3796 12.0696 23.1535 12.1599C22.9274 12.2511 22.6984 12.3504 22.4687 12.4589C22.2392 12.5663 22.0082 12.6839 21.775 12.8096C21.5419 12.9354 21.3091 13.0691 21.0724 13.2131C20.836 13.355 20.6004 13.5071 20.3653 13.6743C20.13 13.8416 19.8944 14.022 19.6604 14.2136C19.4265 14.4052 19.1917 14.61 18.9587 14.8269C18.7258 15.0438 18.4974 15.2709 18.2656 15.5132C18.0337 15.7554 17.8001 16.0109 17.5696 16.2775C17.3391 16.5441 17.1061 16.8239 16.8767 17.1158C16.6472 17.4078 16.4197 17.7159 16.1915 18.0322C15.9631 18.3495 15.7375 18.6749 15.5102 19.0175C15.2832 19.3581 15.0648 19.7018 14.8585 20.0442C14.6523 20.3868 14.4552 20.7264 14.2698 21.071C14.0844 21.4156 13.9119 21.7613 13.7472 22.1082C13.5824 22.4549 13.4305 22.8026 13.2868 23.1506C13.1432 23.4993 13.0061 23.848 12.883 24.1982C12.7604 24.549 12.6479 24.9038 12.5456 25.2564C12.443 25.6092 12.3527 25.9599 12.271 26.3146C12.1888 26.6694 12.1183 27.0263 12.0574 27.3833C12.0056 27.6864 11.9651 27.9814 11.9379 28.2682C11.9105 28.5551 11.8933 28.8349 11.8894 29.1066C11.8856 29.3782 11.8932 29.6418 11.9117 29.8972C11.9211 30.0249 11.9361 30.1507 11.9523 30.2743C11.9674 30.398 11.9888 30.5156 12.0111 30.6362C12.0334 30.7559 12.0536 30.8765 12.081 30.992C12.1094 31.1075 12.1409 31.2211 12.1753 31.3326C12.2088 31.4441 12.2473 31.5546 12.2868 31.6621C12.3263 31.7696 12.3658 31.8729 12.4113 31.9764C12.4569 32.0798 12.5066 32.1852 12.5576 32.2855C12.6094 32.3869 12.6647 32.4832 12.7226 32.5785C12.7813 32.6697 12.8414 32.7691 12.9049 32.8613C12.9688 32.9525 13.0361 33.0407 13.1055 33.1289C13.2465 33.3043 13.3906 33.4726 13.5446 33.6267C13.6986 33.7807 13.8604 33.9196 14.0275 34.0514C14.1947 34.1831 14.3664 34.3078 14.5464 34.4183C14.7267 34.5279 14.916 34.6241 15.1094 34.7113C15.3021 34.8025 15.5029 34.8755 15.7093 34.9414C15.9148 35.0124 16.1267 35.0651 16.3461 35.1087C16.5661 35.1491 16.7929 35.1898 17.0256 35.21C17.2584 35.2303 17.4978 35.2404 17.7433 35.2404C17.7738 35.2404 17.803 35.2349 17.8335 35.2349C17.7919 35.1437 17.7564 35.0453 17.7201 34.947C17.6806 34.8396 17.642 34.7281 17.6088 34.6165C17.5753 34.5051 17.5428 34.3915 17.5145 34.2759C17.4861 34.1604 17.4668 34.0398 17.4445 33.9201C17.4351 33.8694 17.4275 33.8117 17.4192 33.7579C17.4098 33.7525 17.3999 33.7483 17.3909 33.7377C17.2966 33.6768 17.2044 33.6171 17.1147 33.5441C17.0246 33.4731 16.9367 33.3859 16.8529 33.2978C16.7698 33.2065 16.6919 33.1122 16.6139 33.0099C16.5358 32.9064 16.4595 32.798 16.3872 32.6794C16.3173 32.5618 16.251 32.4371 16.1948 32.3023C16.1391 32.1664 16.0907 32.0205 16.0489 31.8674C16.0073 31.7143 15.9748 31.5562 15.9476 31.3859C15.9202 31.2156 15.901 31.0342 15.8877 30.8466C15.8745 30.6591 15.8675 30.4604 15.8684 30.2546C15.8701 30.0489 15.8779 29.839 15.8928 29.616C15.908 29.393 15.9293 29.1598 15.9588 28.9196C15.9883 28.6793 16.0266 28.429 16.0712 28.1705C16.126 27.8491 16.1886 27.5268 16.2578 27.2014C16.3267 26.876 16.4 26.5506 16.4824 26.2221C16.5646 25.8927 16.6551 25.5602 16.7514 25.2267C16.8478 24.8932 16.9536 24.5576 17.0642 24.2211C17.1744 23.8835 17.2911 23.546 17.4156 23.2049C17.5397 22.8632 17.6678 22.5186 17.8063 22.1728C17.9442 21.8271 18.0926 21.4845 18.245 21.1356C18.3979 20.7859 18.5575 20.4311 18.724 20.0775C18.8925 19.7227 19.0568 19.3831 19.2228 19.056C19.3889 18.7286 19.5545 18.4174 19.7178 18.1183C19.8813 17.8193 20.0438 17.5304 20.2048 17.2587C20.3658 16.987 20.5233 16.7326 20.6818 16.4883C20.8402 16.245 20.9999 16.0129 21.1558 15.7969C21.3117 15.581 21.4666 15.3823 21.6199 15.1948C21.7732 15.0073 21.9251 14.8309 22.0759 14.6707C22.2267 14.5106 22.3746 14.3626 22.5228 14.2308C22.6734 14.097 22.8217 13.9763 22.9685 13.8588C23.1155 13.7412 23.2637 13.6297 23.4073 13.5283C23.5507 13.4269 23.6911 13.3398 23.8309 13.2556C23.9702 13.1745 24.1058 13.0924 24.242 13.0255C24.3788 12.9545 24.516 12.9028 24.6487 12.8521C24.7814 12.8014 24.9076 12.7609 25.0368 12.7264C25.1653 12.696 25.2965 12.6655 25.4208 12.6554C25.5468 12.6352 25.6708 12.625 25.7926 12.625C25.9262 12.625 26.0533 12.6279 26.1768 12.6453C26.3015 12.6549 26.4242 12.6756 26.5384 12.7061C26.6525 12.7365 26.7616 12.767 26.8686 12.7974C26.9739 12.8379 27.0745 12.8785 27.1703 12.9333C27.2667 12.9839 27.3576 13.0428 27.4446 13.1066C27.5329 13.1675 27.6137 13.2404 27.6918 13.3164C27.7689 13.3975 27.8431 13.4736 27.9117 13.5628C27.9807 13.654 28.0442 13.7493 28.1036 13.8507C28.1826 13.9875 28.2544 14.1315 28.3176 14.2855C28.3805 14.4396 28.4387 14.6008 28.4858 14.7731C28.5334 14.9445 28.571 15.1289 28.6026 15.3175C28.6082 15.358 28.6082 15.3986 28.6139 15.433C28.8298 15.3519 29.0486 15.2657 29.2618 15.1968C29.484 15.1258 29.7032 15.064 29.9216 15.0133C30.1398 14.9626 30.3565 14.9221 30.5733 14.8774C30.6814 14.8572 30.7908 14.8369 30.8963 14.8267C31.0015 14.817 31.1045 14.8064 31.2105 14.7963C31.4227 14.7761 31.6361 14.7659 31.8443 14.7659L31.8434 14.7714C31.9677 14.7714 32.0885 14.7728 32.2091 14.7769C32.194 14.7364 32.1796 14.7059 32.1655 14.6664C32.1199 14.561 32.0661 14.4576 32.0139 14.3572C31.9621 14.2559 31.9075 14.1596 31.8489 14.0643C31.789 13.973 31.7304 13.8767 31.6658 13.7865C31.601 13.6953 31.5301 13.6091 31.4589 13.525C31.389 13.4439 31.3187 13.3577 31.2442 13.2787C31.1701 13.1975 31.0951 13.1225 31.0163 13.0486C30.9371 12.9776 30.8532 12.9026 30.7699 12.8336C30.6868 12.7626 30.6034 12.6978 30.5157 12.635C30.4274 12.5741 30.3352 12.5103 30.2432 12.4515C30.1519 12.3906 30.0591 12.3369 29.9626 12.2842C29.8662 12.2335 29.7699 12.1798 29.669 12.1322C29.5687 12.0814 29.4617 12.0409 29.3561 12.0014C29.1449 11.9203 28.9258 11.8402 28.6977 11.7764C28.4691 11.7155 28.2316 11.6619 27.9859 11.6192C27.7399 11.5788 27.4896 11.5483 27.2261 11.528C26.9627 11.5078 26.6898 11.4976 26.4089 11.4976L26.4119 11.4827Z"
                                  fill="white"/>
                            <path id="path389"
                                  d="M37.0264 26.229L35.6766 26.7105C35.5029 26.7714 35.3378 26.8696 35.1936 26.9933C35.0513 27.1149 34.9315 27.2619 34.8426 27.4231L33.9328 29.0732L33.5802 27.4231C33.5458 27.2619 33.4764 27.116 33.3758 26.9933C33.2755 26.8696 33.1453 26.7733 32.9945 26.7105L32.7347 26.6061C32.6404 26.8737 32.5443 27.1403 32.4409 27.4079C32.3044 27.7627 32.1599 28.1175 32.0082 28.4713C31.8566 28.8251 31.7004 29.1809 31.5335 29.5347C31.3667 29.8884 31.1896 30.2392 31.0074 30.5929C30.8258 30.9446 30.643 31.2852 30.4623 31.6091C30.2817 31.9325 30.1067 32.2406 29.9271 32.5366C29.7476 32.8326 29.569 33.1124 29.3905 33.38C29.2121 33.6476 29.0289 33.9051 28.8516 34.1444C28.6743 34.3836 28.4988 34.6086 28.3225 34.8205C28.1462 35.0324 27.9725 35.229 27.7973 35.4125C27.7102 35.5037 27.6199 35.5899 27.5328 35.674C27.4456 35.7551 27.3578 35.8423 27.2708 35.9204C27.1826 36.0015 27.0992 36.0744 27.0125 36.1454C26.9254 36.2164 26.8398 36.2813 26.7534 36.3441C26.6374 36.4252 26.5184 36.5103 26.4032 36.5853C26.2887 36.6563 26.1771 36.7313 26.0636 36.7952C25.9506 36.856 25.8372 36.9137 25.7251 36.9675C25.6136 37.0182 25.5013 37.0719 25.391 37.1145C25.281 37.155 25.1715 37.1956 25.0633 37.224C24.9548 37.2544 24.8423 37.2849 24.7351 37.3051C24.6282 37.3254 24.5231 37.3456 24.4175 37.3559C24.3118 37.3655 24.2039 37.3761 24.0997 37.3761C23.9817 37.3761 23.8698 37.3691 23.7573 37.3559C23.7006 37.3504 23.6483 37.3462 23.5948 37.3255C23.54 37.3159 23.4829 37.2951 23.4289 37.285C23.3752 37.2754 23.3266 37.2547 23.2751 37.2344C23.2233 37.2142 23.1685 37.194 23.1176 37.1736C23.0164 37.1331 22.9204 37.0722 22.8249 37.0164C22.7306 36.9556 22.6382 36.8958 22.5487 36.8228C22.4586 36.7518 22.3708 36.6647 22.2869 36.5765C22.2038 36.4853 22.1259 36.391 22.0479 36.2886C21.9699 36.1852 21.8935 36.0767 21.8213 35.9581C21.7514 35.8406 21.6851 35.7159 21.6289 35.581C21.5732 35.4452 21.5248 35.2992 21.483 35.1462C21.4415 34.9931 21.409 34.834 21.3817 34.6636C21.3761 34.623 21.3761 34.5825 21.3704 34.5481C21.3511 34.4103 21.3328 34.2714 21.3228 34.1234C21.3095 33.9359 21.3026 33.7372 21.3035 33.5314C21.305 33.3794 21.313 33.2202 21.3205 33.06C21.2045 33.1411 21.0854 33.2263 20.9703 33.3013C20.8558 33.3723 20.7391 33.4473 20.6254 33.5111C20.5124 33.572 20.4041 33.6308 20.2921 33.6845C20.1806 33.7352 20.0685 33.7889 19.958 33.8315C19.848 33.8721 19.7385 33.9126 19.6301 33.942C19.5216 33.9723 19.4091 34.0028 19.3019 34.0231C19.195 34.0433 19.0899 34.0635 18.9842 34.0738C18.8786 34.0834 18.7705 34.0941 18.6665 34.0941C18.5485 34.0941 18.4366 34.0871 18.3241 34.0738C18.2111 34.0642 18.102 34.0333 17.9957 34.0028C17.8893 33.9725 17.7843 33.942 17.6845 33.8923C17.5943 33.8519 17.5068 33.8011 17.4204 33.7514C17.4299 33.8022 17.4355 33.8599 17.4457 33.9136C17.468 34.0333 17.4883 34.1539 17.5157 34.2694C17.544 34.3849 17.5754 34.4985 17.6099 34.61C17.6434 34.7215 17.6819 34.833 17.7213 34.9405C17.7568 35.0418 17.7932 35.1341 17.8346 35.2284C17.8384 35.2367 17.8422 35.2486 17.8441 35.2588C17.8896 35.3622 17.9393 35.4676 17.9905 35.5679C18.0421 35.6693 18.0977 35.7656 18.1555 35.8609C18.2143 35.9521 18.2744 36.0515 18.3379 36.1437C18.4018 36.235 18.469 36.3231 18.5385 36.4113C18.6084 36.5026 18.6776 36.5857 18.7515 36.6678C18.8256 36.7489 18.9006 36.832 18.9774 36.9091C19.0534 36.9902 19.1371 37.0581 19.2176 37.129C19.2977 37.2 19.3769 37.2668 19.4603 37.3338C19.5444 37.3947 19.6285 37.4676 19.7155 37.5274C19.8026 37.5883 19.8896 37.644 19.9794 37.7008C20.0695 37.7514 20.164 37.8031 20.2572 37.8528C20.3504 37.9035 20.4449 37.9542 20.5423 37.9937C20.6396 38.0342 20.7347 38.0849 20.8352 38.1195C20.9346 38.1599 21.0392 38.1904 21.1422 38.2239C21.2457 38.2542 21.349 38.2948 21.4567 38.3151C21.5628 38.3455 21.6699 38.3657 21.7799 38.3861C21.8899 38.4063 22.0029 38.4266 22.1154 38.4469C22.2276 38.4672 22.343 38.4773 22.4594 38.4874C22.5758 38.4971 22.6917 38.5077 22.8122 38.5077C22.9316 38.5131 23.0543 38.5173 23.1771 38.5173C23.3863 38.5173 23.5915 38.509 23.7987 38.4971C24.0057 38.4874 24.2154 38.4667 24.4219 38.4362C24.6284 38.4058 24.8302 38.3855 25.0346 38.345C25.2388 38.3045 25.4416 38.2638 25.6444 38.2091C25.8465 38.1583 26.0495 38.1016 26.25 38.0368C26.4499 37.9759 26.6484 37.8989 26.8471 37.8218C27.0465 37.7407 27.2419 37.6657 27.4391 37.5755C27.6364 37.4843 27.8333 37.3849 28.0285 37.2826C28.2238 37.1802 28.4193 37.0737 28.6128 36.9582C28.8063 36.8427 28.9968 36.72 29.1887 36.5912C29.3805 36.4624 29.5754 36.3297 29.7656 36.1878C29.9556 36.0469 30.1455 35.8968 30.3338 35.7427C30.5222 35.5887 30.7061 35.4275 30.8925 35.2612C31.0792 35.094 31.2684 34.9176 31.4533 34.7372C31.6381 34.5577 31.8206 34.3743 32.0038 34.1816C32.1869 33.9891 32.3694 33.7904 32.5509 33.5846C32.7334 33.3778 32.913 33.17 33.0867 32.9612C33.2604 32.7523 33.4271 32.5435 33.5919 32.3327C33.7569 32.1218 33.916 31.911 34.0718 31.6991C34.2279 31.4862 34.3804 31.2693 34.5275 31.0544C34.6745 30.8395 34.8186 30.6266 34.9569 30.4097C35.0952 30.1928 35.2272 29.9738 35.3566 29.7548C35.4862 29.5359 35.6104 29.3159 35.7309 29.0949C35.8519 28.8739 35.9682 28.6529 36.0799 28.4299C36.192 28.2069 36.3018 27.9788 36.4047 27.7538C36.5079 27.5288 36.6039 27.3057 36.6981 27.0777C36.7924 26.8506 36.882 26.6205 36.967 26.3914C36.9863 26.3406 37.0065 26.287 37.0249 26.2343L37.0264 26.229Z"
                                  fill="white"/>
                            <path id="path390"
                                  d="M32.2116 14.7673C32.2408 14.8383 32.2694 14.9092 32.2957 14.9822C32.3352 15.0927 32.3716 15.2062 32.4053 15.3228C32.4387 15.4394 32.4691 15.558 32.4965 15.6786C32.5239 15.8002 32.5483 15.9239 32.5695 16.0506C32.5789 16.1014 32.5808 16.156 32.5908 16.2078C32.5946 16.2106 32.6022 16.2106 32.606 16.2132C32.7023 16.264 32.7932 16.3228 32.8802 16.3866C32.9685 16.4475 33.0486 16.5255 33.1266 16.6015C33.2037 16.6826 33.2779 16.7586 33.3465 16.8478C33.4155 16.9391 33.48 17.0293 33.5394 17.1306C33.6184 17.2675 33.6892 17.4165 33.7524 17.5706C33.8154 17.7247 33.8736 17.8858 33.9208 18.0582C33.9684 18.2295 34.006 18.415 34.0374 18.6035C34.0688 18.7931 34.0932 18.9887 34.1094 19.1955C34.1245 19.4023 34.1296 19.6162 34.1308 19.8403C34.1311 20.0643 34.127 20.2954 34.1115 20.5367C34.0945 20.7779 34.072 21.0324 34.0404 21.2908C34.01 21.5493 33.9675 21.817 33.9201 22.0927C33.8592 22.4495 33.7932 22.8053 33.7166 23.1613C33.6406 23.5171 33.5584 23.8689 33.4674 24.2248C33.3761 24.5806 33.2759 24.9384 33.17 25.2934C33.1487 25.3644 33.1233 25.4333 33.1031 25.5033L33.2093 25.4628C33.3815 25.3998 33.5443 25.3034 33.687 25.18C33.8295 25.0577 33.949 24.9113 34.0379 24.7502L34.953 23.1001L35.3004 24.7502C35.3343 24.9113 35.4039 25.0577 35.5047 25.18C35.6068 25.3041 35.7386 25.4005 35.8914 25.4628L37.1205 25.9656C37.1509 25.8743 37.1835 25.7912 37.2128 25.704C37.2887 25.4729 37.3586 25.2408 37.4257 25.0076C37.4926 24.7745 37.5548 24.5413 37.6132 24.3062C37.672 24.071 37.7256 23.8368 37.7753 23.5986C37.825 23.3614 37.8717 23.1201 37.9129 22.8809C37.9413 22.7126 37.9647 22.5464 37.9879 22.3832C38.0102 22.22 38.0335 22.0598 38.0488 21.9017C38.0658 21.7435 38.0762 21.5884 38.0862 21.4354C38.0956 21.2823 38.1013 21.1323 38.1055 20.9853C38.1093 20.8373 38.113 20.6923 38.1111 20.5504C38.1092 20.4075 38.1017 20.2696 38.0922 20.1317C38.0828 19.9949 38.072 19.8601 38.0558 19.7283C38.0406 19.5966 38.0223 19.4678 38.001 19.3411C37.9796 19.2143 37.9554 19.0907 37.928 18.969C37.9006 18.8474 37.8702 18.7288 37.8368 18.6132C37.8024 18.4977 37.7668 18.3841 37.7271 18.2726C37.6877 18.1621 37.6451 18.0537 37.599 17.9482C37.5535 17.8429 37.4996 17.7394 37.4474 17.6391C37.3957 17.5377 37.3411 17.4414 37.2825 17.3461C37.2226 17.2549 37.164 17.1586 37.0993 17.0684C37.0345 16.9771 36.9637 16.8909 36.8926 16.8068C36.8226 16.7257 36.7523 16.6396 36.6779 16.5605C36.6038 16.4794 36.5285 16.4044 36.4499 16.3304C36.3709 16.2594 36.2868 16.1844 36.2037 16.1155C36.1205 16.0445 36.0372 15.9796 35.9494 15.9168C35.8612 15.8559 35.769 15.7921 35.6769 15.7333C35.5857 15.6724 35.4929 15.6188 35.3963 15.5661C35.3 15.5153 35.2036 15.4616 35.1028 15.414C35.0024 15.3633 34.8955 15.3228 34.7898 15.2832C34.6844 15.2426 34.5791 15.2021 34.4699 15.1626C34.3609 15.1221 34.2452 15.0916 34.1309 15.0613C34.0166 15.0309 33.9027 15.0004 33.7832 14.9802C33.6655 14.9498 33.5411 14.9294 33.4181 14.9092C33.2951 14.8889 33.1726 14.8687 33.0461 14.8483C32.9197 14.8281 32.7918 14.8179 32.6601 14.8078C32.5283 14.7982 32.3919 14.7876 32.2566 14.7774C32.2415 14.7768 32.2252 14.7779 32.209 14.7774L32.2116 14.7673Z"
                                  fill="white"/>
                            <path id="path391"
                                  d="M23.4901 26.7995L23.1411 25.1508C23.1069 24.989 23.0367 24.842 22.9351 24.7195C22.8336 24.5971 22.7029 24.502 22.5517 24.4402L21.0102 23.8106L22.7662 23.1811C22.9385 23.1193 23.1016 23.024 23.2449 22.9016C23.3882 22.7791 23.5085 22.6323 23.5978 22.4705L24.5088 20.8216L24.8578 22.4705C24.8921 22.6323 24.9622 22.7791 25.0638 22.9016C25.1654 23.024 25.296 23.1193 25.4473 23.1811L26.9888 23.8106L25.2327 24.4402C25.0604 24.502 24.8973 24.5971 24.754 24.7195C24.6107 24.842 24.4904 24.989 24.4011 25.1508L23.4901 26.7995Z"
                                  fill="white"/>
                        </g>
                    </g>
                </svg>

                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    className="text-2xl font-medium text-gray-900 dark:text-white"
                >
                    Oranji Group
                </motion.p>
            </div>

            <nav className="flex gap-2 p-2 bg-black/90 dark:bg-white backdrop-blur-sm rounded-full">
                <AnimatePresence>
                    {navItems.map((item) => (
                        <motion.a
                            key={item.id}
                            href={item.path}
                            whileTap={{scale: 0.95}}
                            className={cn(
                                'flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-200',
                                active === item.id
                                    ? 'bg-primary text-white'
                                    : 'text-white dark:text-black'
                            )}
                            onClick={() => setActive(item.id)}
                        >
                            {active === item.id && (
                                <>
                                    {item.icon}
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 rounded-full -z-10"
                                        initial={false}
                                        transition={{
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 30
                                        }}
                                    />
                                </>
                            )}
                            <span className="font-medium">{item.label}</span>
                        </motion.a>
                    ))}
                </AnimatePresence>
            </nav>
            <div className="flex items-center gap-6">
                <ModeToggle/>
                <motion.a
                    className="px-5 py-2 rounded-full border border-gray-700 text-neutral-900 dark:text-white dark:border-white"
                    whileTap={{scale: 0.95}}>
                    Contact Us
                </motion.a>
            </div>
        </motion.header>
    );
};

