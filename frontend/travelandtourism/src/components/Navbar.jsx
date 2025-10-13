import React from 'react'

const navbar = () => {
    return (
        <>
            <nav class="navbar bg-light">
                <div class="container d-flex justify-content-between align-items-center py-1">
                    <div>
                        <h4>Logo</h4>
                    </div>
                    <div>
                        <ul class="nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="dubaiDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dubai
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="dubaiDropdown">
                                    <li><a class="dropdown-item" href="about-us">About Us</a></li>
                                    <li><a class="dropdown-item" href="#">Burj Khalifa Tour</a></li>
                                    <li><a class="dropdown-item" href="#">City Tour</a></li>
                                    <li><a class="dropdown-item" href="#">Luxury Packages</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button class="btn btn-primary">Enquire Now!</button>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default navbar