import React, { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

const initialState = { name: '', hours: '', type_code: '', advisor: '', institution: '', notes: '' };

export default function AddActivityModal({ show, onClose, onSave, activityToEdit, referenceData = [] }) {
    const [data, setData] = useState(initialState);
    const [hourLimit, setHourLimit] = useState(null);
    const isEditing = !!activityToEdit;

    useEffect(() => {
        if (data.type_code) {
            let limit = null;
            for (const category of referenceData) {
                const item = category.items.find(i => `${category.code}_${i.id}` === data.type_code);
                if (item) {
                    limit = item.maxHours;
                    break;
                }
            }
            setHourLimit(limit);
        } else {
            setHourLimit(null);
        }
    }, [data.type_code, referenceData]);

    useEffect(() => {
        if (isEditing) {
            setData(activityToEdit);
        } else {
            setData(initialState);
        }
    }, [activityToEdit, show]);

    if (!show) {
        return null;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'hours' && hourLimit !== null && Number(value) > hourLimit) {
            setData({ ...data, [name]: hourLimit.toString() });
        } else {
            setData({ ...data, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(data);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl">
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-between items-center p-4 border-b">
                        <h3 className="text-xl font-semibold text-purple-dark">
                            {isEditing ? 'Editar atividade' : 'Cadastrar atividade'}
                        </h3>
                        <button type="button" onClick={onClose} 
                                className="p-1 rounded-full text-purple-dark hover:bg-purple-dark hover:text-white
                                           border border-purple-dark transition-colors duration-200">
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="p-5 grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <label htmlFor="name" className="block text-sm font-medium text-purple-dark">Nome da atividade:</label>
                            <input type="text" name="name" id="name" value={data.name || ''} onChange={handleChange} required className="mt-1 block w-full border-purple-dark rounded-md shadow-sm focus:ring-purple-dark focus:border-purple-dark text-sm py-2" />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="hours" className="block text-sm font-medium text-purple-dark">Horas:</label>
                            <input 
                                type="number" 
                                name="hours" 
                                id="hours" 
                                value={data.hours || ''} 
                                onChange={handleChange} 
                                required
                                max={hourLimit}
                                className="mt-1 block w-full border-purple-dark rounded-md shadow-sm focus:ring-purple-dark focus:border-purple-dark text-sm py-2" />
                            {hourLimit !== null && (
                                <p className="text-xs text-gray-500 mt-1">Limite para este código: {hourLimit}h</p>
                            )}
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="type_code" className="block text-sm font-medium text-purple-dark">Código do tipo:</label>
                            <select name="type_code" id="type_code" value={data.type_code || ''} onChange={handleChange} required className="mt-1 block w-full border-purple-dark rounded-md shadow-sm focus:ring-purple-dark focus:border-purple-dark text-sm py-2">
                                <option value="" disabled>Selecione</option>
                                {referenceData.map(category => (
                                    <optgroup key={category.code} label={`${category.code} - ${category.title}`}>
                                        {category.items.map(item => (
                                            <option key={item.id} value={`${category.code}_${item.id}`}>
                                                {`${category.code}_${item.id} - ${item.description.substring(0, 30)}...`}
                                            </option>
                                        ))}
                                    </optgroup>
                                ))}
                            </select>
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="advisor" className="block text-sm font-medium text-purple-dark">Orientador:</label>
                            <input type="text" name="advisor" id="advisor" value={data.advisor || ''} onChange={handleChange} className="mt-1 block w-full border-purple-dark rounded-md shadow-sm focus:ring-purple-dark focus:border-purple-dark text-sm py-2" />
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="institution" className="block text-sm font-medium text-purple-dark">Instituição:</label>
                            <input type="text" name="institution" id="institution" value={data.institution || ''} onChange={handleChange} className="mt-1 block w-full border-purple-dark rounded-md shadow-sm focus:ring-purple-dark focus:border-purple-dark text-sm py-2" />
                        </div>
                        <div className="col-span-3 flex items-end gap-4 mt-2">
                            <div className="flex-grow">
                                <label htmlFor="notes" className="block text-sm font-medium text-purple-dark">Anotações:</label>
                                <textarea name="notes" id="notes" rows="3" value={data.notes || ''} onChange={handleChange} className="mt-1 block w-full border-purple-dark rounded-md shadow-sm focus:ring-purple-dark focus:border-purple-dark text-sm py-2"></textarea>
                            </div>
                            <div className="flex-shrink-0">
                                <button type="submit" className="bg-purple-dark text-white font-bold py-2 px-8 rounded-lg hover:bg-opacity-90 transition text-sm">
                                    SALVAR
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}