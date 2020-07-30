import React from 'react';
import SingleItemHeader from './SingleItemHeader';
const Background = 'images/img_2.jpg';
//
const SingleItem = () => {
    return (
        <>
        <SingleItemHeader/>
            <div class="site-wrap">

                <section class="site-section py-lg">
                    <div class="container">

                        <div class="row blog-entries element-animate">

                            <div class="col-md-12 col-lg-8 main-content">

                                <div class="post-content-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium nam quas inventore, ut iure iste modi eos adipisci ad ea itaque labore earum autem nobis et numquam, minima eius. Nam eius, non unde ut aut sunt eveniet rerum repellendus porro.</p>
                                    <p>Sint ab voluptates itaque, ipsum porro qui obcaecati cumque quas sit vel. Voluptatum provident id quis quo. Eveniet maiores perferendis officia veniam est laborum, expedita fuga doloribus natus repellendus dolorem ab similique sint eius cupiditate necessitatibus, magni nesciunt ex eos.</p>
                                    <p>Quis eius aspernatur, eaque culpa cumque reiciendis, nobis at earum assumenda similique ut? Aperiam vel aut, ex exercitationem eos consequuntur eaque culpa totam, deserunt, aspernatur quae eveniet hic provident ullam tempora error repudiandae sapiente illum rerum itaque voluptatem. Commodi, sequi.</p>
                                    <div class="row mb-5 mt-5">
                                        <div class="col-md-12 mb-4">
                                            <img src="images/img_1.jpg" alt="Image placeholder" class="img-fluid rounded" />
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <img src="images/img_2.jpg" alt="Image placeholder" class="img-fluid rounded" />
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <img src="images/img_3.jpg" alt="Image placeholder" class="img-fluid rounded" />
                                        </div>
                                    </div>
                                    <p>Quibusdam autem, quas molestias recusandae aperiam molestiae modi qui ipsam vel. Placeat tenetur veritatis tempore quos impedit dicta, error autem, quae sint inventore ipsa quidem. Quo voluptate quisquam reiciendis, minus, animi minima eum officia doloremque repellat eos, odio doloribus cum.</p>
                                    <p>Temporibus quo dolore veritatis doloribus delectus dolores perspiciatis recusandae ducimus, nisi quod, incidunt ut quaerat, magnam cupiditate. Aut, laboriosam magnam, nobis dolore fugiat impedit necessitatibus nisi cupiditate, quas repellat itaque molestias sit libero voluptas eveniet omnis illo ullam dolorem minima.</p>
                                    <p>Porro amet accusantium libero fugit totam, deserunt ipsa, dolorem, vero expedita illo similique saepe nisi deleniti. Cumque, laboriosam, porro! Facilis voluptatem sequi nulla quidem, provident eius quos pariatur maxime sapiente illo nostrum quibusdam aliquid fugiat! Earum quod fuga id officia.</p>
                                    <p>Illo magnam at dolore ad enim fugiat ut maxime facilis autem, nulla cumque quis commodi eos nisi unde soluta, ipsa eius aspernatur sint atque! Nihil, eveniet illo ea, mollitia fuga accusamus dolor dolorem perspiciatis rerum hic, consectetur error rem aspernatur!</p>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus magni explicabo id molestiae, minima quas assumenda consectetur, nobis neque rem, incidunt quam tempore perferendis provident obcaecati sapiente, animi vel expedita omnis quae ipsa! Obcaecati eligendi sed odio labore vero reiciendis facere accusamus molestias eaque impedit, consequuntur quae fuga vitae fugit?</p>
                                </div>

                            </div>



                            <div class="col-md-12 col-lg-4 sidebar">
                                <div class="sidebar-box search-form-wrap">
                                    <form action="#" class="search-form">
                                        <div class="form-group">
                                            <span class="icon fa fa-search"></span>
                                            <input type="text" class="form-control" id="s" placeholder="Type a keyword and hit enter" />
                                        </div>
                                    </form>
                                </div>



                                <div class="sidebar-box">
                                    <h3 class="heading">Categories</h3>
                                    <ul class="categories">
                                        <li><a href="#">Food <span>(12)</span></a></li>
                                        <li><a href="#">Travel <span>(22)</span></a></li>
                                        <li><a href="#">Lifestyle <span>(37)</span></a></li>
                                        <li><a href="#">Business <span>(42)</span></a></li>
                                        <li><a href="#">Adventure <span>(14)</span></a></li>
                                    </ul>
                                </div>

                            </div>


                        </div>
                    </div>
                </section>


            </div>
        </>
    )
}

export default SingleItem;