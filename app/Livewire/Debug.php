<?php

namespace App\Livewire;

use Livewire\Component;

class Debug extends Component
{
    public function render()
    {
        return view('livewire.debug');
    }

    public $birth;
    public $postnumber;
    public $hisuonly;
    protected $rules = [
        'hisuonly' => 'required',
        'birth' => 'required|digits:8|integer',
        'postnumber' => 'required|digits:7|integer',
    ];
    protected $messages = [
        'hisuonly.required' => '入力してください',
        'birth.required' => '入力してください',
        'birth.digits:8' => '数字8桁で入力して下さい',
        'birth.integer' => '半角数字で入力して下さい',
        'postnumber.required' => '入力してください',
        'postnumber.digits:7' => '数字7桁で入力して下さい',
        'postnumber.integer' => '半角数字で入力して下さい'
    ];
    protected $validationAttributes = [
        'hisuonly' => '必須の入力項目です',
        'birth' => '20001231',
        'postnumber' => '0000000'
    ];
    public function update()
    {
    // エラーがあったら
        if($this->getErrorBag()->any()) {
            $error = $this->getErrorBag()->first('sample');
        }
    }
}
