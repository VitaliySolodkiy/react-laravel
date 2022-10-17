import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const CategoryList = () => {
    const [categories, setCategories] = useState([]);


    const fetchCategories = async () => {
        await axios.get('http://laravelreact/api/categories')
            .then(({ data }) => {
                setCategories(data);
            })
            .catch(error => { throw new Error('Can`t load url') })
    }
    useEffect(() => {
        fetchCategories();
    }, [categories]);


    const deleteHandler = (id) => {
        axios.delete(`http://laravelreact/api/categories/${id}`);
        fetchCategories();
    }

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
                                <div class="row flex-nowrap gx-1">
                                    <div class="col d-flex justify-content-end">
                                        <a href=""><img src="icons/edit.png" style={{ width: "25px" }} className="me-2" /></a>
                                    </div>
                                    <div class="col">
                                        <form onSubmit={(e) => {
                                            e.preventDefault();
                                            deleteHandler(category.id)
                                        }}>
                                            <button class="my-btn"><img src="icons/delete.png" style={{ width: "25px" }} /></button>
                                        </form>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    );
}

export default CategoryList;
