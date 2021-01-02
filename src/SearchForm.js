import React from "react";
import { Form, Col } from "react-bootstrap";
import { findRenderedComponentWithType } from "react-dom/cjs/react-dom-test-utils.development";

const SearchForm = ({ params, onParamChange }) => {
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        onChange={onParamChange}
                        value={params.description}
                        name="description"
                        type="text"
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                        onChange={onParamChange}
                        value={params.location}
                        name="location"
                        type="text"
                    />
                </Form.Group>
                <Form.Group as={Col} xc="auto" className="ml-2 mt-4">
                    <Form.Check
                        onChange={onParamChange}
                        value={params.full_time}
                        name="full_time"
                        id="full-time"
                        label="Only Full Time"
                        type="checkbox"
                    />
                </Form.Group>
            </Form.Row>
        </Form>
    );
};

export default SearchForm;
