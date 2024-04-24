<?php
 
namespace app\Livewire;
 
use Livewire\Component;
use resources\Livewire;
 
class Modal extends Component
{
    public $showModal = false;
 
    public function render()
    {
        return view('livewire.modal');
    }

    public function openModal()
    {
        $this->showModal = true;
    }
 
    public function closeModal()
    {
        $this->showModal = false;
    }
}
