import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

function Navigation () {
    return (
        <div>
            <header>
                <div style={{
                backgroundColor: 'white',
                width: '100%',
                height: '100px',
                borderBottom: '1px solid gray',
                display: 'flex',
                alignItems: 'center',
                }}>
            <div style={{
                                        width: '40px',
                                        height: '40px',
            }}>
                <MenuIcon style={{
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer'
                }}/>
            </div>
                <img src="https://s3-alpha-sig.figma.com/img/1496/d28c/3bfdb46a4d127503e8d90a880f07033a?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ArJXtFqZphYaxsu4mGUExYZ2T1T5QbRd2AWHesK7qeMaT3178Mq8Y3LkV~irUxX0zN4VQlY36rpHwBGJC8lYgHp3~OCZswd4APoS8DrnSr8HX2wfbf41UOTqPdq65~iR4emKg6Lpi3NDskjNiMFkXY0KZ41NAoxMrZJTg-kKkanTo31jtxzYbqZb3GCky6mXKFiN36DNFS7QDMNQgBy5t-DTialbV2w-wB99iINSmAQy034THsMyTnleX7-dvT5D1fv8mSw~cbmKLbbpCz2vtf-qZL5nuiYA4H4wo2MjdYcPgCAcg9WkD0Yjw0Pu647gw8peER9JkTwDkUgGrjLjaA__" alt=""
                style={{
                    width: '80px',
                    height: '80px'
                }}/>
                <div style={{width:'400px', fontFamily:'Italiana', fontSize:'40px', color:'#21BA14'}}>D.Ts Pharmacy</div>
                    <div style={{
                        width: '100%',
                        height: '40px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '70px',
                        marginRight: '40px'
                    }}>
                    <SearchIcon style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        gap: '50px'
                    }}/>
                    <FavoriteBorderTwoToneIcon style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex'
                    }}/>
                    <AddShoppingCartIcon style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex'
                    }}/>
                    </div>
                </div>
            </header>
            <div>
                <img
                 style={{
                    width: '100%',
                    height: '100%',
                 }}
                 src="https://s3-alpha-sig.figma.com/img/fd70/694f/509d0aea3360e7a7471cd6a12d7d3ba1?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BDiZTC-54iCEdt~zP5lvaRSgvEG-yRtvpr3yPu663mOzbN~okaYQF33ppzMt3bcX-d9MwoQrx38JFmHI9VXdL0X0JPM~k1wuZL9szfGRLsY7oRDHUbM5wDMgszKhD4U39lDfW~37Dnb2-A3CiL6z3tQuDmMX4Krrk~QclHSEgtVH6SuxyyIWrz-p6oURFVZtKvGuidqCP67Nuz4r5Rucy7Eqm6jeP8OnkTxaXcrQaQUZP7j0u4EQ3EHn4-K83oS5UIPU3UYavZ3~PWh5oZ9fmkCJ5oqPj-FZo9nM7WzJ4xJ35UzNkl2gDiYwM10ARq7pFUOzEWbktpSU9KzhzHbqnA__">
                    
                 </img>
            </div>
        </div>
    )
}
export default Navigation;