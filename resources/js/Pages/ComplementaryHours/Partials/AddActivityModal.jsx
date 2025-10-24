import React, { useEffect, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useForm, router } from '@inertiajs/react';

const initialState = {
    name: '',
    hours: '',
    type_code: '',
    advisor: '',
    institution: '',
    notes: '',
};

export default function AddActivityModal({ show, onClose, activityToEdit, referenceData = [] }) {
    const { data, setData, post, processing, errors, reset, clearErrors } = useForm(initialState);
    const [hourLimit, setHourLimit] = useState(null);
    const isEditing = !!activityToEdit;

    useEffect(() => {
        if(data.type_code) {
            let limit = null;
            for (const category of referenceData) {
                const item = category.items.find(i => `${category.code}_${i.id}` === data.type_code);
                if(item) {
                    limit = item.maxHours;
                    break;
                }
            }
            setHourLimit(limit);
        }
        else {
            setHourLimit(null);
        }
    }, [data.type_code, referenceData]);

    useEffect(() => {
        if(show) {
            clearErrors();
            if (isEditing) {
                setData({ ...initialState, ...activityToEdit });
            }
            else {
                reset();
            }
        }
    }, [activityToEdit, show]);

    if(!show) {
        return null;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if(name === 'hours' && hourLimit !== null && Number(value) > hourLimit) {
            setData(name, hourLimit.toString());
        }
        else {
            setData(name, value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const options = {
            onSuccess: () => onClose(),
            preserveScroll: true,
        };

        if(isEditing) {
            router.put(route('complementary-activities.update', activityToEdit.id), data, options);
        }
        else {
            post(route('complementary-activities.store'), options);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="w-full max-w-3xl rounded-2xl bg-white shadow-xl">
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center justify-between border-b p-4">
                        <h3 className="text-xl font-semibold text-purple-dark">
                            {isEditing ? 'Editar Atividade' : 'Cadastrar Atividade'}
                        </h3>
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-full border border-purple-dark p-1 text-purple-dark transition-colors duration-200 hover:bg-purple-dark hover:text-white"
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <label htmlFor="name" className="block text-sm font-medium text-purple-dark">Nome da atividade:</label>
                            <input type="text" name="name" id="name" value={data.name} onChange={handleChange} required className="mt-1 block w-full rounded-md border-purple-dark shadow-sm" />
                            {errors.name && <div className="mt-1 text-xs text-red-500">{errors.name}</div>}
                        </div>

                        <div>
                            <label htmlFor="hours" className="block text-sm font-medium text-purple-dark">Horas:</label>
                            <input type="number" name="hours" id="hours" value={data.hours} onChange={handleChange} required max={hourLimit} className="mt-1 block w-full rounded-md border-purple-dark shadow-sm" />
                            {errors.hours && <div className="mt-1 text-xs text-red-500">{errors.hours}</div>}
                            {hourLimit !== null && <p className="mt-1 text-xs text-gray-500">Limite: {hourLimit}h</p>}
                        </div>

                        <div>
                            <label htmlFor="type_code" className="block text-sm font-medium text-purple-dark">Código do tipo:</label>
                            <select name="type_code" id="type_code" value={data.type_code} onChange={handleChange} required className="mt-1 block w-full rounded-md border-purple-dark shadow-sm">
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
                            {errors.type_code && <div className="mt-1 text-xs text-red-500">{errors.type_code}</div>}
                        </div>

                        <div>
                            <label htmlFor="advisor" className="block text-sm font-medium text-purple-dark">Orientador:</label>
                            <input type="text" name="advisor" id="advisor" value={data.advisor} onChange={handleChange} className="mt-1 block w-full rounded-md border-purple-dark shadow-sm" />
                            {errors.advisor && <div className="mt-1 text-xs text-red-500">{errors.advisor}</div>}
                        </div>

                        <div>
                            <label htmlFor="institution" className="block text-sm font-medium text-purple-dark">Instituição:</label>
                            <input type="text" name="institution" id="institution" value={data.institution} onChange={handleChange} className="mt-1 block w-full rounded-md border-purple-dark shadow-sm" />
                            {errors.institution && <div className="mt-1 text-xs text-red-500">{errors.institution}</div>}
                        </div>

                        <div className="mt-2 flex items-end gap-4 md:col-span-3">
                            <div className="flex-grow">
                                <label htmlFor="notes" className="block text-sm font-medium text-purple-dark">Anotações:</label>
                                <textarea name="notes" id="notes" rows="3" value={data.notes} onChange={handleChange} className="mt-1 block w-full rounded-md border-purple-dark shadow-sm"></textarea>
                                {errors.notes && <div className="mt-1 text-xs text-red-500">{errors.notes}</div>}
                            </div>
                            <div className="flex-shrink-0">
                                <button type="submit" className="rounded-lg bg-purple-dark px-8 py-2 font-bold text-white transition hover:bg-opacity-90" disabled={processing}>
                                    {processing ? 'SALVANDO...' : 'SALVAR'}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}