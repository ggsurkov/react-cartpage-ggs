import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <main>
            <header>
                <h1>My Favorite Shop</h1>
            </header>
            <section className="cart-page">
                <article className="enter-product">
                    <h2>Добавить продукт</h2>
                    <form action="" className="enter-product-form">
                        <input maxLength="20" type="text" placeholder='Название товара?' />
                        <input className="input_price" type="number" placeholder='Цена?' />
                        <button type="submit">Добавить</button>
                    </form>
                </article>
                <article className="cart-table">
                    <h2>Корзина</h2>
                    <table>
                        <tr>
                            <th>Продукт</th>
                            <th>Цена</th>
                            <th>Цена со скидкой</th>
                        </tr>
                        <tr>
                            <td>Телефон</td>
                            <td>100</td>
                            <td>99</td>
                        </tr>
                        <tr>
                            <td>Магнитофон</td>
                            <td>200</td>
                            <td>198</td>
                        </tr>
                        <tr>
                            <td>Миелофон</td>
                            <td>400</td>
                            <td>397</td>
                        </tr>


                    </table>
                </article>
                <article className="enter-sales">
                    <form className="enter-sales-form">
                        <label htmlFor="">Применить скидку <input min="0" max="99" step="1" className="input_sales" type="number" /> рублей</label>
                        <button type="submit">Применить</button>
                    </form>
                </article>
            </section>
        </main>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));