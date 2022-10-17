import React, { useEffect, useState } from 'react';
import axios from "axios";


const CategoryList = () => {
    const [categories, setCategories] = useState([]);


    const fetchCategories = async () => {
        await axios.get('http://latavelreact/api/categories')
            .then(({ data }) => {
                setCategories(data);
            })
            .catch(error => { throw new Error('Can`t load url') })
    }
    useEffect(() => {
        fetchCategories();

    }, []);

    return (
        <div className='container mt-3'>
            <a href='category-add' className="btn btn-primary">Add Category</a>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category, index) => {
                        return <tr>
                            <td>{index + 1}</td>
                            <td>{category.name}</td>
                            <td>
                                <a href=""><img src="icons/edit.png" style={{ width: "25px" }} className="me-2" /></a>
                                <a href=""><img src="icons/delete.png" style={{ width: "25px" }} alt="" /></a>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    );
}

export default CategoryList;
