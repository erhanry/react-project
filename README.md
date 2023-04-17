# SoftUni Project Defense

\
&nbsp;

## :hammer_and_pick: Built With
[![My Skills](https://skillicons.dev/icons?i=js,react,html,css,bootstrap,vscode)](https://skillicons.dev)

[SoftUni practice server](https://github.com/softuni-practice-server/softuni-practice-server) as a backend solution

\
&nbsp;

# React sample code　

```javascript
import { memo } from 'react';
import { Link } from "react-router-dom";
import { useBookContext } from '../../contexts/BookContext';

const Sidebar = () => {
    const { category } = useBookContext();
    return (
        <div className="col-lg-3">
            <div className="card sidebar-menu mb-4">
                <div className="card-header">
                    <h3 className="h4 card-title">Категории</h3>
                </div>
                <div className="card-body">
                    <ul className="nav nav-pills flex-column category-menu">
                        <li>
                            <ul className="list-unstyled">
                                <li><Link to="/books">Всички книги</Link></li>
                                {category.map(x =>
                                    <li key={x._id}><Link to={`/category/${x._id}`}>{x.title}</Link></li>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default memo(Sidebar);
```

\
&nbsp;

# Screenshots

### Home page with last 4 books
<img src="screenshots/1-Home-page-with-last-4-books.png" alt="Home page with last 4 books" width="800">

\
&nbsp;
### Books list
<img src="screenshots/2-Books-list.png" alt="Books list" width="800">

\
&nbsp;
### Details page
<img src="screenshots/3-Details-page.png" alt="Details page" width="800">

\
&nbsp;
### Filter by category
<img src="screenshots/4-Filter-by-category.png" alt="Filter by category" width="800">

\
&nbsp;
### Create user
<img src="screenshots/5-Create-user.png" alt="Create user" width="800">

\
&nbsp;
### Create-Edit Books Forms
<img src="screenshots/6-Create-Edit-Forms.png" alt="Create-Edit Books Forms" width="800">

\
&nbsp;
### Delete confirm modal popup
<img src="screenshots/7-delete-confirm-modal-popup.png" alt="Delete confirm modal popup" width="800">

\
&nbsp;
### Responsive desing for small devices
<img src="screenshots/8-Responsive-for-Small-devices.png" alt="Responsive desing for small devices" width="800">

\
&nbsp;
### Responsive desing for medium devices
<img src="screenshots/9-Responsive-for-Medium-devices.png" alt="Responsive desing for medium devices" width="800">

\
&nbsp;
### Toggle menu position
<img src="screenshots/10-Toggle-menu-position.png" alt="Toggle menu position" width="800">

\
&nbsp;

### React unit testing
<img src="screenshots/11-React-unit-testing.png" alt="React unit testing" width="800">
