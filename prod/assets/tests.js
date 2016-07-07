define('hospitalrun/tests/_base.stylelint-test', ['exports'], function (exports) {
  'use strict';

  module('Style Lint');
  test('_base.scss should pass stylelint', function () {
    ok('true , _base.scss passed stylelint');
  });
});
define('hospitalrun/tests/_bootstrap-theme.stylelint-test', ['exports'], function (exports) {
  'use strict';

  module('Style Lint');
  test('_bootstrap-theme.scss should pass stylelint', function () {
    ok('true , _bootstrap-theme.scss passed stylelint');
  });
});
define('hospitalrun/tests/_bootstrap.stylelint-test', ['exports'], function (exports) {
  'use strict';

  module('Style Lint');
  test('_bootstrap.scss should pass stylelint', function () {
    ok('true , _bootstrap.scss passed stylelint');
  });
});
define('hospitalrun/tests/_index.stylelint-test', ['exports'], function (exports) {
  'use strict';

  module('Style Lint');
  test('_index.scss should pass stylelint', function () {
    ok('true , _index.scss passed stylelint');
  });
});
define('hospitalrun/tests/_layout.stylelint-test', ['exports'], function (exports) {
  'use strict';

  module('Style Lint');
  test('_layout.scss should pass stylelint', function () {
    ok('true , _layout.scss passed stylelint');
  });
});
define('hospitalrun/tests/_loading_notice.stylelint-test', ['exports'], function (exports) {
  'use strict';

  module('Style Lint');
  test('_loading_notice.scss should pass stylelint', function () {
    ok('true , _loading_notice.scss passed stylelint');
  });
});
define('hospitalrun/tests/_sign_in_screen.stylelint-test', ['exports'], function (exports) {
  'use strict';

  module('Style Lint');
  test('_sign_in_screen.scss should pass stylelint', function () {
    ok('true , _sign_in_screen.scss passed stylelint');
  });
});
define('hospitalrun/tests/_temp_misc.stylelint-test', ['exports'], function (exports) {
  'use strict';

  module('Style Lint');
  test('_temp_misc.scss should pass stylelint', function () {
    ok('true , _temp_misc.scss passed stylelint');
  });
});
define('hospitalrun/tests/_typography.stylelint-test', ['exports'], function (exports) {
  'use strict';

  module('Style Lint');
  test('_typography.scss should pass stylelint', function () {
    ok('true , _typography.scss passed stylelint');
  });
});
define('hospitalrun/tests/_variables_mixins.stylelint-test', ['exports'], function (exports) {
  'use strict';

  module('Style Lint');
  test('_variables_mixins.scss should pass stylelint', function () {
    ok('true , _variables_mixins.scss passed stylelint');
  });
});
define('hospitalrun/tests/acceptance/admin-test', ['exports', 'ember', 'qunit', 'hospitalrun/tests/helpers/start-app'], function (exports, _ember, _qunit, _hospitalrunTestsHelpersStartApp) {
  'use strict';

  (0, _qunit.module)('Acceptance | admin', {
    beforeEach: function beforeEach() {
      this.application = (0, _hospitalrunTestsHelpersStartApp['default'])();
    },

    afterEach: function afterEach() {
      _ember['default'].run(this.application, 'destroy');
    }
  });

  (0, _qunit.test)('visiting /admin', function (assert) {
    runWithPouchDump('admin', function () {
      authenticateUser();
      visit('/admin');
      andThen(function () {
        assert.equal(currentURL(), '/admin');
        select('.lookup-type', 'Visit Types');
        andThen(function () {
          assert.equal(find('h3.panel-title').text(), 'Visit Types', 'Visit Types header is displayed');
          assert.equal(find('td.lookup-type-value:first').text(), 'Admission', 'Admission visit type displays');
          click('button:contains(Update)');
          waitToAppear('.modal-dialog');
          andThen(function () {
            assert.equal(find('.modal-title').text(), 'List Saved', 'Lookup list is saved');
          });
        });
      });
    });
  });

  (0, _qunit.test)('add new lookup value', function (assert) {
    runWithPouchDump('admin', function () {
      authenticateUser();
      visit('/admin');
      andThen(function () {
        assert.equal(currentURL(), '/admin');
        select('.lookup-type', 'Anesthesiologists');
        click('button:contains(Add Value)');
        waitToAppear('.modal-dialog');
        andThen(function () {
          assert.equal(find('.modal-title').text(), 'Add Value', 'Add value modal is displayed');
          fillIn('.lookup-type-value input', 'Dr Smith');
          click('button:contains(Add):last');
          andThen(function () {
            waitToAppear('td.lookup-type-value:contains(Dr Smith)');
            andThen(function () {
              assert.equal(find('td.lookup-type-value:contains(Dr Smith)').length, 1, 'Added lookup type is added to list');
            });
          });
        });
      });
    });
  });

  (0, _qunit.test)('delete lookup value', function (assert) {
    runWithPouchDump('admin', function () {
      authenticateUser();
      visit('/admin');
      andThen(function () {
        assert.equal(currentURL(), '/admin');
        select('.lookup-type', 'Anesthesia Types');
        andThen(function () {
          assert.equal(find('td.lookup-type-value:contains(Epidural)').length, 1, 'Have lookup type to delete from list');
          click('button:contains(Delete)');
          andThen(function () {
            assert.equal(find('td.lookup-type-value:contains(Epidural)').length, 0, 'Deleted lookup type is removed from the list');
          });
        });
      });
    });
  });

  (0, _qunit.test)('Update address options', function (assert) {
    runWithPouchDump('admin', function () {
      authenticateUser();
      visit('/admin/address');
      andThen(function () {
        assert.equal(currentURL(), '/admin/address');
        fillIn('input', 'Address Label');
        click('button:contains(Update)');
        andThen(function () {
          waitToAppear('.modal-dialog');
          andThen(function () {
            assert.equal(find('.modal-title').text(), 'Options Saved', 'Address Options Saved');
          });
        });
      });
    });
  });
});
define('hospitalrun/tests/acceptance/admin-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - acceptance');
  test('acceptance/admin-test.js should pass jscs', function () {
    ok(true, 'acceptance/admin-test.js should pass jscs.');
  });
});
define('hospitalrun/tests/acceptance/appointments-test', ['exports', 'ember', 'qunit', 'hospitalrun/tests/helpers/start-app'], function (exports, _ember, _qunit, _hospitalrunTestsHelpersStartApp) {
  'use strict';

  (0, _qunit.module)('Acceptance | appointments', {
    beforeEach: function beforeEach() {
      this.application = (0, _hospitalrunTestsHelpersStartApp['default'])();
    },

    afterEach: function afterEach() {
      _ember['default'].run(this.application, 'destroy');
    }
  });

  (0, _qunit.test)('visiting /appointments', function (assert) {
    runWithPouchDump('default', function () {
      authenticateUser();
      visit('/appointments');
      andThen(function () {
        assert.equal(currentURL(), '/appointments');
        findWithAssert('button:contains(new appointment)');
        findWithAssert('.table-header');
      });
    });
  });

  (0, _qunit.test)('visiting /appointments/missed', function (assert) {
    runWithPouchDump('appointments', function () {
      authenticateUser();
      var url = '/appointments';
      // create an apointmet scheduled in the past
      var today = moment();
      var tomorrow = moment().add(1, 'days');
      var status = 'Missed';
      createAppointment(today, tomorrow, status);
      visit(url);
      andThen(function () {
        assert.equal(currentURL(), url);
        findWithAssert('.appointment-status:contains(' + status + ')');
      });
    });
  });

  (0, _qunit.test)('Creating a new appointment', function (assert) {
    runWithPouchDump('appointments', function () {
      authenticateUser();
      visit('/appointments/edit/new');

      andThen(function () {
        assert.equal(currentURL(), '/appointments/edit/new');
        findWithAssert('button:contains(Cancel)');
        findWithAssert('button:contains(Add)');
      });

      createAppointment();

      andThen(function () {
        assert.equal(currentURL(), '/appointments');
        assert.equal(find('tr').length, 2, 'New appointment has been added');
        findWithAssert('button:contains(Add Visit)');
        findWithAssert('button:contains(Edit)');
        findWithAssert('button:contains(Delete)');
      });
    });
  });

  (0, _qunit.test)('Adding a visit to an appointment', function (assert) {
    runWithPouchDump('appointments', function () {
      authenticateUser();
      createAppointment();
      visit('/appointments');

      andThen(function () {
        assert.equal(currentURL(), '/appointments');
        assert.equal(find('tr').length, 2, 'New appointment has been added');
        findWithAssert('button:contains(Add Visit)');
        findWithAssert('button:contains(Edit)');
        findWithAssert('button:contains(Delete)');
      });

      click('button:contains(Add Visit)');
      andThen(function () {
        assert.equal(currentURL(), '/visits/edit/new', 'Now in add visiting information route');
      });
      click('.panel-footer button:contains(Add)');
      waitToAppear('.modal-dialog');
      andThen(function () {
        assert.equal(find('.modal-title').text(), 'Visit Saved', 'New visit has been saved');
      });
      click('button:contains(Ok)');
      andThen(function () {
        findWithAssert('button:contains(New Note)');
        findWithAssert('button:contains(New Procedure)');
        findWithAssert('button:contains(New Medication)');
        findWithAssert('button:contains(New Lab)');
        findWithAssert('button:contains(New Imaging)');
        findWithAssert('button:contains(New Vitals)');
        findWithAssert('button:contains(Add Item)');
      });

      click('button:contains(Return)');

      click('button:contains(Return)');
      andThen(function () {
        assert.equal(currentURL(), '/patients');
        findWithAssert('button:contains(Discharge)');
        findWithAssert('button:contains(Edit)');
        findWithAssert('button:contains(Delete)');
      });
    });
  });

  (0, _qunit.test)('Delete an appointment', function (assert) {
    runWithPouchDump('appointments', function () {
      authenticateUser();
      createAppointment();
      visit('/appointments');

      andThen(function () {
        assert.equal(currentURL(), '/appointments');
        assert.equal(find('.appointment-date').length, 1, 'One appointment is listed');
        findWithAssert('button:contains(Add Visit)');
        findWithAssert('button:contains(Edit)');
        findWithAssert('button:contains(Delete)');
      });

      click('button:contains(Delete)');
      waitToAppear('.modal-dialog');
      andThen(function () {
        assert.equal(find('.modal-title').text().trim(), 'Delete Appointment', 'Delete Appointment confirmation modal has been displayed');
      });
      click('button:contains(Delete)');
      waitToDisappear('.appointment-date');
      andThen(function () {
        assert.equal(find('.appointment-date').length, 0, 'No appointments are displayed');
      });
    });
  });

  function createAppointment() {
    var startDate = arguments.length <= 0 || arguments[0] === undefined ? new Date() : arguments[0];
    var endDate = arguments.length <= 1 || arguments[1] === undefined ? moment().add(1, 'day').toDate() : arguments[1];
    var status = arguments.length <= 2 || arguments[2] === undefined ? 'Scheduled' : arguments[2];

    visit('/appointments/edit/new');
    fillIn('.test-patient-input .tt-input', 'Lennex Zinyando - P00017');
    triggerEvent('.test-patient-input .tt-input', 'input');
    triggerEvent('.test-patient-input .tt-input', 'blur');
    select('.test-appointment-type', 'Admission');
    select('.test-appointment-status', status);
    waitToAppear('.test-appointment-start input');
    andThen(function () {
      selectDate('.test-appointment-start input', startDate);
    });
    andThen(function () {
      selectDate('.test-appointment-end input', endDate);
    });
    fillIn('.test-appointment-location .tt-input', 'Harare');
    triggerEvent('.test-appointment-location .tt-input', 'input');
    triggerEvent('.test-appointment-location .tt-input', 'blur');
    fillIn('.test-appointment-with', 'Dr Test');
    click('button:contains(Add)');
    waitToAppear('.table-header');
  }
});
define('hospitalrun/tests/acceptance/appointments-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - acceptance');
  test('acceptance/appointments-test.js should pass jscs', function () {
    ok(true, 'acceptance/appointments-test.js should pass jscs.');
  });
});
define('hospitalrun/tests/acceptance/imaging-test', ['exports', 'ember', 'qunit', 'hospitalrun/tests/helpers/start-app'], function (exports, _ember, _qunit, _hospitalrunTestsHelpersStartApp) {
  'use strict';

  (0, _qunit.module)('Acceptance | imaging', {
    beforeEach: function beforeEach() {
      this.application = (0, _hospitalrunTestsHelpersStartApp['default'])();
    },

    afterEach: function afterEach() {
      _ember['default'].run(this.application, 'destroy');
    }
  });

  (0, _qunit.test)('visiting /imaging', function (assert) {
    runWithPouchDump('default', function () {
      authenticateUser();
      visit('/imaging');

      andThen(function () {
        assert.equal(currentURL(), '/imaging');
        var newImagingButton = find('button:contains(new imaging)');
        assert.equal(newImagingButton.length, 1, 'New Imaging button is visible');
        findWithAssert('p:contains(No items found. )');
        findWithAssert('a:contains(Create a new record?)');
      });
      click('button:contains(new imaging)');
      andThen(function () {
        assert.equal(currentURL(), '/imaging/edit/new');
      });
    });
  });

  (0, _qunit.test)('create a new imaging request', function (assert) {
    runWithPouchDump('imaging', function () {
      authenticateUser();
      visit('/imaging/edit/new');

      andThen(function () {
        assert.equal(currentURL(), '/imaging/edit/new');
      });
      fillIn('.patient-input .tt-input', 'Joe Bagadonuts - P00001');
      triggerEvent('.patient-input .tt-input', 'input');
      triggerEvent('.patient-input .tt-input', 'blur');
      fillIn('.imaging-type-input .tt-input', 'Chest Scan');
      fillIn('.radiologist-input .tt-input', 'Dr Test');
      fillIn('.result-input input', 'Check is clear');
      fillIn('textarea', 'Patient is healthy');
      click('button:contains(Add)');
      waitToAppear('.modal-dialog');
      andThen(function () {
        assert.equal(find('.modal-title').text(), 'Imaging Request Saved', 'Imaging Request was saved successfully');
      });
      click('button:contains(Ok)');
      andThen(function () {
        findWithAssert('button:contains(Update)');
        findWithAssert('button:contains(Return)');
        findWithAssert('button:contains(Complete)');
      });
      andThen(function () {
        assert.equal(find('.patient-summary').length, 1, 'Patient summary is displayed');
      });
      click('button:contains(Return)');
      andThen(function () {
        assert.equal(currentURL(), '/imaging');
        assert.equal(find('tr').length, 3, 'Two imaging requests are displayed');
      });
    });
  });

  (0, _qunit.test)('completed requests are displayed', function (assert) {
    runWithPouchDump('imaging', function () {
      authenticateUser();
      visit('/imaging/completed');

      andThen(function () {
        assert.equal(currentURL(), '/imaging/completed');
        assert.equal(find('.table').length, 1, 'Requests table is visible');
      });
    });
  });

  (0, _qunit.test)('mark an imaging request as completed', function (assert) {
    runWithPouchDump('imaging', function () {
      authenticateUser();
      visit('/imaging');

      andThen(function () {
        assert.equal(currentURL(), '/imaging');
        assert.equal(find('.table').length, 1, 'Requests table is visible');
        assert.equal(find('tr').length, 2, 'One imaging request not completed');
      });
      click('button:contains(Edit):first');
      andThen(function () {
        assert.equal(currentURL(), '/imaging/edit/12DEDA58-4670-7A74-BA8B-9CC5E5CA82E7');
        findWithAssert('button:contains(Update)');
        findWithAssert('button:contains(Return)');
        findWithAssert('button:contains(Complete)');
      });
      click('button:contains(Complete)');
      waitToAppear('.modal-dialog');
      andThen(function () {
        assert.equal(find('.modal-title').text(), 'Imaging Request Completed', 'Imaging Request was saved successfully');
      });
      click('button:contains(Ok)');
      click('button:contains(Return)');
      andThen(function () {
        assert.equal(currentURL(), '/imaging');
        findWithAssert('a:contains(Create a new record?)');
      });
    });
  });
});
define('hospitalrun/tests/acceptance/imaging-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - acceptance');
  test('acceptance/imaging-test.js should pass jscs', function () {
    ok(true, 'acceptance/imaging-test.js should pass jscs.');
  });
});
define('hospitalrun/tests/acceptance/inventory-test', ['exports', 'ember', 'qunit', 'hospitalrun/tests/helpers/start-app'], function (exports, _ember, _qunit, _hospitalrunTestsHelpersStartApp) {
  'use strict';

  (0, _qunit.module)('Acceptance | inventory', {
    beforeEach: function beforeEach() {
      this.application = (0, _hospitalrunTestsHelpersStartApp['default'])();
    },

    afterEach: function afterEach() {
      _ember['default'].run(this.application, 'destroy');
    }
  });

  (0, _qunit.test)('visiting /inventory', function (assert) {
    runWithPouchDump('default', function () {
      authenticateUser();
      visit('/inventory');

      andThen(function () {
        assert.equal(currentURL(), '/inventory');
        findWithAssert('button:contains(new request)');
        findWithAssert('button:contains(inventory received)');
        findWithAssert('p:contains(No requests found. )');
        findWithAssert('a:contains(Create a new request?)');
      });
    });
  });

  (0, _qunit.test)('Adding a new inventory item', function (assert) {
    runWithPouchDump('default', function () {
      authenticateUser();
      visit('/inventory/edit/new');

      andThen(function () {
        assert.equal(currentURL(), '/inventory/edit/new');
      });
      fillIn('.test-inv-name input', 'Biogesic');
      select('.test-inv-rank', 'B');
      fillIn('textarea', 'Biogesic nga medisina');
      select('.test-inv-type', 'Medication');
      fillIn('.test-inv-cross input', '2600');
      fillIn('.test-inv-reorder input', '100');
      fillIn('.test-inv-price input', '5');
      select('.test-inv-dist-unit', 'tablet');
      fillIn('.test-inv-quantity input', '1000');
      fillIn('.test-inv-cost input', '4000');
      select('.test-inv-unit', 'tablet');
      fillIn('.test-vendor .tt-input', 'Alpha Pharmacy');
      triggerEvent('.test-vendor .tt-input', 'input');
      click('button:contains(Add)');
      waitToAppear('.modal-dialog');

      andThen(function () {
        assert.equal(find('.modal-title').text(), 'Inventory Item Saved', 'Inventory Item was saved successfully');
      });
      click('button:contains(Ok)');

      andThen(function () {
        findWithAssert('button:contains(Add Purchase)');
        findWithAssert('button:contains(Update)');
        findWithAssert('button:contains(Return)');
      });

      click('button:contains(Return)');
      andThen(function () {
        assert.equal(currentURL(), '/inventory/listing');
        assert.equal(find('tr').length, 2, 'One item is listed');
      });
    });
  });

  (0, _qunit.test)('Deleting the last inventory item', function (assert) {
    runWithPouchDump('inventory', function () {
      authenticateUser();
      visit('/inventory/listing');

      andThen(function () {
        assert.equal(currentURL(), '/inventory/listing');
        click('button:contains(Delete)');
        waitToAppear('.modal-dialog');
        andThen(function () {
          assert.equal(find('.modal-title').text(), 'Delete Item', 'Deleting confirmation.');
        });
        click('.modal-content button:contains(Delete)');
        waitToAppear('.panel-body .alert-info');
        andThen(function () {
          assert.equal(currentURL(), '/inventory/listing');
          findWithAssert('a:contains(Create a new record?)');
        });
      });
    });
  });

  (0, _qunit.test)('Creating a new inventory request', function (assert) {
    runWithPouchDump('inventory', function () {
      authenticateUser();
      visit('/inventory/request/new');

      andThen(function () {
        assert.equal(currentURL(), '/inventory/request/new');
      });
      fillIn('.test-inv-item .tt-input', 'Biogesic - m00001 (1000 available)');
      triggerEvent('.test-inv-item .tt-input', 'input');
      triggerEvent('.test-inv-item .tt-input', 'blur');
      fillIn('.test-inv-quantity input', 500);
      fillIn('.test-delivery-location .tt-input', 'Harare');
      fillIn('.test-delivery-aisle .tt-input', 'C100');
      fillIn('.test-bill-to .tt-input', 'Accounts Dept');
      click('button:contains(Add)');
      waitToAppear('.modal-dialog');

      andThen(function () {
        assert.equal(find('.modal-title').text(), 'Request Updated', 'New request has been saved');
      });
      click('button:contains(Ok)');
      andThen(function () {
        findWithAssert('button:contains(Fulfill)');
        findWithAssert('button:contains(Cancel)');
      });
      click('button:contains(Cancel)');
      andThen(function () {
        assert.equal(currentURL(), '/inventory');
        assert.equal(find('tr').length, 3, 'Two requests are now displayed');
      });
    });
  });

  (0, _qunit.test)('Fulfilling an inventory request', function (assert) {
    runWithPouchDump('inventory', function () {
      authenticateUser();
      visit('/inventory');

      andThen(function () {
        assert.equal(currentURL(), '/inventory');
        var tableRows = find('tr').length;
        assert.equal(tableRows, 2, 'One request not fulfilled');
      });
      click('button:contains(Fulfill)');

      andThen(function () {
        findWithAssert('button:contains(Fulfill)');
        findWithAssert('button:contains(Cancel)');
      });

      click('button:contains(Fulfill)');
      waitToAppear('.modal-dialog');

      andThen(function () {
        var modalTitle = find('.modal-title');
        assert.equal(modalTitle.text(), 'Request Fulfilled', 'Inventory request has been fulfilled');
      });

      click('button:contains(Ok)');
      andThen(function () {
        assert.equal(currentURL(), '/inventory');
      });
    });
  });

  (0, _qunit.test)('Receiving inventory', function (assert) {
    runWithPouchDump('inventory', function () {
      authenticateUser();
      visit('/inventory/batch/new');

      andThen(function () {
        assert.equal(currentURL(), '/inventory/batch/new');
      });
      fillIn('.test-vendor .tt-input', 'Alpha Pharmacy');
      triggerEvent('.test-vendor .tt-input', 'input');
      triggerEvent('.test-vendor .tt-input', 'blur');
      fillIn('.test-invoice-number input', 'P2345');
      fillIn('.test-inv-item .tt-input', 'Biogesic - m00001');
      triggerEvent('.test-inv-item .tt-input', 'input');
      triggerEvent('.test-inv-item .tt-input', 'blur');
      keyEvent('.test-inv-item .tt-input', 'keypress', 9);
      fillIn('.test-inv-quantity input', 500);
      fillIn('.test-inv-cost input', '2000');
      click('button:contains(Save)');
      waitToAppear('.modal-title');

      andThen(function () {
        var modalTitle = find('.modal-title');
        assert.equal(modalTitle.text(), 'Inventory Purchases Saved', 'Inventory has been received');
      });
      click('button:contains(Ok)');

      andThen(function () {
        assert.equal(currentURL(), '/inventory/listing');
      });
    });
  });

  testSimpleReportForm('Detailed Adjustment');
  testSimpleReportForm('Detailed Purchase');
  testSimpleReportForm('Detailed Stock Usage');
  testSimpleReportForm('Detailed Stock Transfer');
  testSimpleReportForm('Detailed Expenses');
  testSimpleReportForm('Expiration Date');
  testSimpleReportForm('Summary Expenses');
  testSimpleReportForm('Summary Purchase');
  testSimpleReportForm('Summary Stock Usage');
  testSimpleReportForm('Summary Stock Transfer');
  testSimpleReportForm('Finance Summary');
  testSingleDateReportForm('Inventory By Location');
  testSingleDateReportForm('Inventory Valuation');

  function testSimpleReportForm(reportName) {
    (0, _qunit.test)(reportName + ' report can be generated', function (assert) {
      runWithPouchDump('default', function () {
        authenticateUser();
        visit('/inventory/reports');
        andThen(function () {
          assert.equal(currentURL(), '/inventory/reports');
        });
        var startDate = moment('2015-10-01');
        var endDate = moment('2015-10-31');
        selectDate('.test-start-date input', startDate.toDate());
        selectDate('.test-end-date input', endDate.toDate());
        select('#report-type', '' + reportName);
        click('button:contains(Generate Report)');
        waitToAppear('.panel-title');

        andThen(function () {
          var reportTitle = reportName + ' Report ' + startDate.format('l') + ' - ' + endDate.format('l');
          assert.equal(find('.panel-title').text().trim(), reportTitle, reportName + ' Report generated');
          findWithAssert('a:contains(Export Report)');
        });
      });
    });
  }

  function testSingleDateReportForm(reportName) {
    (0, _qunit.test)(reportName + ' report can be generated', function (assert) {
      runWithPouchDump('default', function () {
        authenticateUser();
        visit('/inventory/reports');
        andThen(function () {
          assert.equal(currentURL(), '/inventory/reports');
        });
        select('#report-type', '' + reportName);
        click('button:contains(Generate Report)');
        waitToAppear('.panel-title');

        andThen(function () {
          assert.equal(find('.panel-title').text().trim(), reportName + ' Report ' + moment().format('l'), reportName + ' Report generated');
          findWithAssert('a:contains(Export Report)');
        });
      });
    });
  }
});
define('hospitalrun/tests/acceptance/inventory-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - acceptance');
  test('acceptance/inventory-test.js should pass jscs', function () {
    ok(true, 'acceptance/inventory-test.js should pass jscs.');
  });
});
define('hospitalrun/tests/acceptance/invoices-test', ['exports', 'ember', 'qunit', 'hospitalrun/tests/helpers/start-app'], function (exports, _ember, _qunit, _hospitalrunTestsHelpersStartApp) {
  'use strict';

  (0, _qunit.module)('Acceptance | invoices', {
    beforeEach: function beforeEach() {
      this.application = (0, _hospitalrunTestsHelpersStartApp['default'])();
    },

    afterEach: function afterEach() {
      _ember['default'].run(this.application, 'destroy');
    }
  });

  (0, _qunit.test)('visiting /invoices', function (assert) {
    runWithPouchDump('billing', function () {
      authenticateUser();
      visit('/invoices');
      andThen(function () {
        assert.equal(currentURL(), '/invoices');
      });
    });
  });

  (0, _qunit.test)('create invoice', function (assert) {
    runWithPouchDump('billing', function () {
      authenticateUser();
      visit('/invoices/edit/new');
      andThen(function () {
        assert.equal(currentURL(), '/invoices/edit/new');
      });
      fillIn('.invoice-patient .tt-input', 'Joe Bagadonuts - TCH 00001');
      triggerEvent('.invoice-patient .tt-input', 'input');
      triggerEvent('.invoice-patient .tt-input', 'blur');
      waitToAppear('.invoice-visit option:contains((Admission))');
      andThen(function () {
        select('.invoice-visit', '(Admission)');
        fillIn('.external-invoice-no input', 'inv000002');
      });
      waitToAppear('button:contains(Update)');
      andThen(function () {
        click('button:contains(Update)');
      });
      waitToAppear('.modal-dialog');
      andThen(function () {
        assert.equal(find('.modal-title').text(), 'Invoice Saved', 'Invoice was saved successfully');
      });
    });
  });

  (0, _qunit.test)('delete invoice', function (assert) {
    runWithPouchDump('billing', function () {
      authenticateUser();
      visit('/invoices');
      andThen(function () {
        assert.equal(currentURL(), '/invoices');
        assert.equal(find('.invoice-number:contains(inv00001)').length, 1, 'Invoice is displayed for deletion');
      });
      click('button:contains(Delete)');
      andThen(function () {
        waitToAppear('.modal-dialog');
      });
      andThen(function () {
        assert.equal(find('.alert').text().trim(), 'Are you sure you wish to delete <strong>inv00001</strong>?', 'Invoice deletion confirm displays');
      });
      click('button:contains(Delete):last');
      waitToDisappear('.invoice-number:contains(inv00001)');
      andThen(function () {
        assert.equal(find('.invoice-number:contains(inv00001)').length, 0, 'Invoice is deleted');
      });
    });
  });

  (0, _qunit.test)('add payment', function (assert) {
    runWithPouchDump('billing', function () {
      authenticateUser();
      visit('/invoices');
      andThen(function () {
        assert.equal(currentURL(), '/invoices');
      });
      click('button:contains(Add Payment)');
      waitToAppear('.modal-dialog');
      andThen(function () {
        assert.equal(find('.modal-title').text(), 'Add Payment', 'Add Payment modal displays');
      });
      fillIn('.payment-amount input', 100);
      click('.update-payment-btn');
      waitToAppear('.modal-title:contains(Payment Added)');
      andThen(function () {
        assert.equal(find('.modal-title').text(), 'Payment Added', 'Payment was saved successfully');
      });
    });
  });

  (0, _qunit.test)('add deposit', function (assert) {
    runWithPouchDump('billing', function () {
      authenticateUser();
      visit('/invoices');
      andThen(function () {
        assert.equal(currentURL(), '/invoices');
      });
      click('button:contains(add deposit)');
      waitToAppear('.modal-dialog');
      andThen(function () {
        assert.equal(find('.modal-title').text(), 'Add Deposit', 'Add Deposit modal displays');
      });
      fillIn('.payment-amount input', 140);
      fillIn('.payment-patient .tt-input', 'Joe Bagadonuts - TCH 00001');
      triggerEvent('.payment-patient .tt-input', 'input');
      triggerEvent('.payment-patient .tt-input', 'blur');
      click('.update-payment-btn');
      waitToAppear('.modal-title:contains(Deposit Added)');
      andThen(function () {
        assert.equal(find('.modal-title').text(), 'Deposit Added', 'Deposit was saved successfully');
      });
    });
  });
});
define('hospitalrun/tests/acceptance/invoices-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - acceptance');
  test('acceptance/invoices-test.js should pass jscs', function () {
    ok(true, 'acceptance/invoices-test.js should pass jscs.');
  });
});
define('hospitalrun/tests/acceptance/labs-test', ['exports', 'ember', 'qunit', 'hospitalrun/tests/helpers/start-app'], function (exports, _ember, _qunit, _hospitalrunTestsHelpersStartApp) {
  'use strict';

  (0, _qunit.module)('Acceptance | labs', {
    beforeEach: function beforeEach() {
      this.application = (0, _hospitalrunTestsHelpersStartApp['default'])();
    },

    afterEach: function afterEach() {
      _ember['default'].run(this.application, 'destroy');
    }
  });

  (0, _qunit.test)('visiting /labs', function (assert) {
    runWithPouchDump('default', function () {
      authenticateUser();
      visit('/labs');

      andThen(function () {
        assert.equal(currentURL(), '/labs');
        findWithAssert('a:contains(Create a new record?)');
        findWithAssert('button:contains(new lab)');
      });
    });
  });

  (0, _qunit.test)('Adding a new lab request', function (assert) {
    runWithPouchDump('labs', function () {
      authenticateUser();
      visit('/labs');

      click('button:contains(new lab)');

      andThen(function () {
        assert.equal(currentURL(), '/labs/edit/new');
      });

      fillIn('.test-patient-name .tt-input', 'Lennex Zinyando - P00017');
      triggerEvent('.test-patient-name .tt-input', 'input');
      triggerEvent('.test-patient-name .tt-input', 'blur');
      fillIn('.test-lab-type .tt-input', 'Chest Scan');
      fillIn('.test-result-input input', 'Chest is clear');
      fillIn('textarea', 'Dr test ordered another scan');
      click('button:contains(Add)');
      waitToAppear('.modal-dialog');

      andThen(function () {
        assert.equal(find('.modal-title').text(), 'Lab Request Saved', 'Lab Request was saved successfully');
        findWithAssert('.patient-summary');
      });

      click('.modal-footer button:contains(Ok)');

      andThen(function () {
        assert.equal(find('.patient-summary').length, 1, 'Patient summary is displayed');
      });

      click('.panel-footer button:contains(Return)');

      andThen(function () {
        assert.equal(currentURL(), '/labs');
        assert.equal(find('tr').length, 3, 'Two lab requests are displayed');
      });
    });
  });

  (0, _qunit.test)('Marking a lab request as completed', function (assert) {
    runWithPouchDump('labs', function () {
      authenticateUser();
      visit('/labs/completed');

      andThen(function () {
        assert.equal(find('.alert-info').text().trim(), 'No completed items found.', 'No completed requests are displayed');
      });

      visit('/labs');
      click('button:contains(Edit)');
      click('button:contains(Complete)');
      waitToAppear('.modal-dialog');

      andThen(function () {
        assert.equal(find('.modal-title').text(), 'Lab Request Completed', 'Lab Request was completed successfully');
      });

      click('.modal-footer button:contains(Ok)');
      click('.panel-footer button:contains(Return)');
      visit('/labs/completed');

      andThen(function () {
        assert.equal(find('tr').length, 2, 'One completed request is displayed');
      });
    });
  });
});
define('hospitalrun/tests/acceptance/labs-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - acceptance');
  test('acceptance/labs-test.js should pass jscs', function () {
    ok(true, 'acceptance/labs-test.js should pass jscs.');
  });
});
define('hospitalrun/tests/acceptance/login-test', ['exports', 'ember', 'qunit', 'hospitalrun/tests/helpers/start-app', 'ember-cli-fake-server'], function (exports, _ember, _qunit, _hospitalrunTestsHelpersStartApp, _emberCliFakeServer) {
  'use strict';

  (0, _qunit.module)('Acceptance | login', {
    beforeEach: function beforeEach() {
      _emberCliFakeServer['default'].start();
      this.application = (0, _hospitalrunTestsHelpersStartApp['default'])();
    },

    afterEach: function afterEach() {
      _emberCliFakeServer['default'].stop();
      _ember['default'].run(this.application, 'destroy');
    }
  });

  (0, _qunit.test)('visiting / redirects user to login', function (assert) {
    assert.expect(3);
    runWithPouchDump('default', function () {
      visit('/');

      (0, _emberCliFakeServer.stubRequest)('post', '/db/_session', function (request) {
        assert.equal(request.requestBody, 'name=hradmin&password=test', 'credential are sent to the server');
        request.ok({ 'ok': true, 'name': 'hradmin', 'roles': ['System Administrator', 'admin', 'user'] });
      });

      (0, _emberCliFakeServer.stubRequest)('post', '/chkuser', function (request) {
        assert.equal(request.requestBody, 'name=hradmin', 'username is sent to /chkuser');
        request.ok({ 'prefix': 'p1', 'role': 'System Administrator' });
      });

      andThen(function () {
        assert.equal(currentURL(), '/login');
      });

      fillIn('#identification', 'hradmin');
      fillIn('#password', 'test');
      click('button:contains(Sign in)');
    });
  });

  (0, _qunit.test)('incorrect credentials shows an error message on the screen', function (assert) {
    assert.expect(2);
    runWithPouchDump('default', function () {
      visit('/');

      var errorMessage = 'Username or password is incorrect.';

      (0, _emberCliFakeServer.stubRequest)('post', '/db/_session', function (request) {
        assert.equal(request.requestBody, 'name=hradmin&password=tset', 'credential are sent to the server');
        request.error({ 'error': 'unauthorized', 'reason': errorMessage });
      });

      fillIn('#identification', 'hradmin');
      fillIn('#password', 'tset');
      click('button:contains(Sign in)');

      andThen(function () {
        assert.equal(find('.form-signin-alert').text(), errorMessage, 'Error reason is shown');
      });
    });
  });
});
define('hospitalrun/tests/acceptance/login-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - acceptance');
  test('acceptance/login-test.js should pass jscs', function () {
    ok(true, 'acceptance/login-test.js should pass jscs.');
  });
});
define('hospitalrun/tests/acceptance/medication-test', ['exports', 'ember', 'qunit', 'hospitalrun/tests/helpers/start-app'], function (exports, _ember, _qunit, _hospitalrunTestsHelpersStartApp) {
  'use strict';

  (0, _qunit.module)('Acceptance | medication', {
    beforeEach: function beforeEach() {
      this.application = (0, _hospitalrunTestsHelpersStartApp['default'])();
    },

    afterEach: function afterEach() {
      _ember['default'].run(this.application, 'destroy');
    }
  });

  (0, _qunit.test)('visiting /medication', function (assert) {
    runWithPouchDump('default', function () {
      authenticateUser();
      visit('/medication');

      andThen(function () {
        assert.equal(currentURL(), '/medication');
        findWithAssert('button:contains(new request)');
        findWithAssert('button:contains(dispense medication)');
        findWithAssert('button:contains(return medication)');
        findWithAssert('p:contains(No items found. )');
        findWithAssert('a:contains(Create a new medication request?)');
      });
    });
  });

  (0, _qunit.test)('creating a new medication request', function (assert) {
    runWithPouchDump('medication', function () {
      authenticateUser();
      visit('/medication/edit/new');

      andThen(function () {
        assert.equal(currentURL(), '/medication/edit/new');
      });
      fillIn('.test-patient-input .tt-input', 'Lennex Zinyando - P00017');
      triggerEvent('.test-patient-input .tt-input', 'input');
      triggerEvent('.test-patient-input .tt-input', 'blur');
      waitToAppear('.have-inventory-items');
      andThen(function () {
        fillIn('.test-medication-input .tt-input', 'Biogesic - m00001 (950 available)');
        triggerEvent('.test-medication-input .tt-input', 'input');
        triggerEvent('.test-medication-input .tt-input', 'blur');
        keyEvent('.test-medication-input .tt-input', 'keypress', 9);
      });
      fillIn('textarea', '30 Biogesic Pills');
      fillIn('.test-quantity-input input', '30');
      click('button:contains(Add)');

      waitToAppear('.modal-dialog');
      andThen(function () {
        assert.equal(find('.modal-title').text().trim(), 'Medication Request Saved', 'New medication request has been saved');
      });

      click('button:contains(Ok)');
      click('button:contains(Return)');
      andThen(function () {
        assert.equal(currentURL(), '/medication');
        assert.equal(find('tr').length, 3, 'New medication request is now displayed');
      });
    });
  });

  (0, _qunit.test)('fulfilling a medication request', function (assert) {
    runWithPouchDump('medication', function () {
      authenticateUser();
      visit('/medication');
      click('button:contains(Fulfill)');

      andThen(function () {
        assert.equal(find('.patient-summary').length, 1, 'Patient summary is displayed');
      });

      click('button:contains(Fulfill)');
      waitToAppear('.modal-dialog');

      andThen(function () {
        assert.equal(find('.modal-title').text().trim(), 'Medication Request Fulfilled', 'Medication Request has been Fulfilled');
      });

      click('button:contains(Ok)');
      click('button:contains(Return)');

      andThen(function () {
        assert.equal(currentURL(), '/medication');
        findWithAssert('p:contains(No items found. )');
        findWithAssert('a:contains(Create a new medication request?)');
      });
    });
  });

  (0, _qunit.test)('returning medication', function (assert) {
    runWithPouchDump('medication', function () {
      authenticateUser();
      visit('/medication/return/new');

      andThen(function () {
        assert.equal(currentURL(), '/medication/return/new');
      });
      waitToAppear('.have-inventory-items');
      andThen(function () {
        fillIn('.test-medication-input .tt-input', 'Biogesic - m00001');
        triggerEvent('.test-medication-input .tt-input', 'input');
        triggerEvent('.test-medication-input .tt-input', 'blur');
        keyEvent('.test-medication-input .tt-input', 'keypress', 9);
      });
      fillIn('.test-medication-quantity input', 30);
      click('button:contains(Return Medication)');
      waitToAppear('.modal-dialog');

      andThen(function () {
        assert.equal(find('.modal-title').text(), 'Medication Returned', 'Medication has been return successfully');
      });
      click('button:contains(Ok)');

      andThen(function () {
        assert.equal(currentURL(), '/medication');
      });
    });
  });
});
define('hospitalrun/tests/acceptance/medication-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - acceptance');
  test('acceptance/medication-test.js should pass jscs', function () {
    ok(true, 'acceptance/medication-test.js should pass jscs.');
  });
});
define('hospitalrun/tests/acceptance/patient-notes-test', ['exports', 'ember', 'qunit', 'hospitalrun/tests/helpers/start-app'], function (exports, _ember, _qunit, _hospitalrunTestsHelpersStartApp) {
  'use strict';

  (0, _qunit.module)('Acceptance | patient notes', {
    beforeEach: function beforeEach() {
      this.application = (0, _hospitalrunTestsHelpersStartApp['default'])();
    },

    afterEach: function afterEach() {
      _ember['default'].run(this.application, 'destroy');
    }
  });

  (0, _qunit.test)('patient notes crud testing', function (assert) {
    runWithPouchDump('default', function () {
      authenticateUser();
      visit('/patients/edit/new');
      andThen(function () {
        assert.equal(currentURL(), '/patients/edit/new');
        fillIn('.test-first-name input', 'John');
        fillIn('.test-last-name input', 'Doe');
        click('.panel-footer button:contains(Add)');
        waitToAppear('.modal-dialog');
      });
      andThen(function () {
        assert.equal(find('.modal-title').text(), 'Patient Saved', 'Patient record has been saved');
        click('button:contains(Close)');
        waitToAppear('.patient-summary');
      });
      andThen(function () {
        findWithAssert('.patient-summary');
        click('[data-test-selector=visits-tab]');
      });
      andThen(function () {
        findWithAssert('#visits');
        click('button:contains(New Visit)');
      });
      andThen(function () {
        assert.equal(currentURL(), '/visits/edit/new', 'Now in add visiting information route');
        click('.panel-footer button:contains(Add)');
        waitToAppear('.modal-dialog');
      });
      andThen(function () {
        assert.equal(find('.modal-title').text(), 'Visit Saved', 'New visit has been saved');
        click('button:contains(Ok)');
      });
      andThen(function () {
        findWithAssert('button:contains(New Note)');
        findWithAssert('button:contains(New Procedure)');
        findWithAssert('button:contains(New Medication)');
        findWithAssert('button:contains(New Lab)');
        findWithAssert('button:contains(New Imaging)');
        findWithAssert('button:contains(New Vitals)');
        findWithAssert('button:contains(Add Item)');
        assert.equal(find('button:contains(New Note)').length, 1, 'New Note button in visible');
        click('button:contains(New Note)');
      });
      andThen(function () {
        assert.equal(find('label:contains(Note)').length, 1, 'Notes modal appeared.');
        fillIn('.test-note-content textarea', 'This is a note.');
        fillIn('.test-note-attribution input', 'Dr. Nick');
        click('.modal-footer button:contains(Add)');
      });
      andThen(function () {
        waitToAppear('#visit-notes table tr td:contains(This is a note.)');
      });
      andThen(function () {
        assert.equal(find('#visit-notes table tr td:contains(This is a note.)').length, 1, 'Successfully added note.');
        click('#visit-notes table tr td button:contains(Edit)');
        waitToAppear('.modal-dialog');
      });
      andThen(function () {
        fillIn('.test-note-content textarea', 'This is an updated note.');
        click('.modal-footer button:contains(Update)');
        waitToAppear('#visit-notes table tr td:contains(This is an updated note.)');
      });
      andThen(function () {
        assert.equal(find('#visit-notes table tr td:contains(This is an updated note.)').length, 1, 'Successfully updated note.');
        click('#visit-notes table tr td button:contains(Delete)');
        waitToAppear('.modal-dialog');
      });
      andThen(function () {
        click('.modal-footer button:contains(Ok)');
      });
      andThen(function () {
        assert.equal(find('#visit-notes table tr td:contains(This is an updated note.)').length, 0, 'Successfully deleted note.');
      });
    });
  });
});
define('hospitalrun/tests/acceptance/patient-notes-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - acceptance');
  test('acceptance/patient-notes-test.js should pass jscs', function () {
    ok(true, 'acceptance/patient-notes-test.js should pass jscs.');
  });
});
define('hospitalrun/tests/acceptance/patients-test', ['exports', 'ember', 'qunit', 'hospitalrun/tests/helpers/start-app'], function (exports, _ember, _qunit, _hospitalrunTestsHelpersStartApp) {
  'use strict';

  (0, _qunit.module)('Acceptance | patients', {
    beforeEach: function beforeEach() {
      this.application = (0, _hospitalrunTestsHelpersStartApp['default'])();
    },

    afterEach: function afterEach() {
      _ember['default'].run(this.application, 'destroy');
    }
  });

  (0, _qunit.test)('visiting /patients route', function (assert) {
    runWithPouchDump('default', function () {
      authenticateUser();
      visit('/patients');
      andThen(function () {
        assert.equal(currentURL(), '/patients');
        var noPatientsFound = find('[data-test-selector="no-patients-found"]');
        assert.equal(noPatientsFound.text().trim(), 'No patients found. Create a new patient record?', 'no records found');
        var newPatientButton = find('button:contains(+ new patient)');
        assert.equal(newPatientButton.length, 1, 'Add new patient button is visible');
      });
      click('button:contains(+ new patient)');
      andThen(function () {
        assert.equal(currentURL(), '/patients/edit/new');
      });
    });
  });

  (0, _qunit.test)('View reports tab', function (assert) {
    runWithPouchDump('default', function () {
      authenticateUser();
      visit('/patients/reports');

      andThen(function () {
        var generateReportButton = find('button:contains(Generate Report)');
        assert.equal(currentURL(), '/patients/reports');
        assert.equal(generateReportButton.length, 1, 'Generate Report button is visible');
        var reportType = find('[data-test-selector="select-report-type"]');
        assert.equal(reportType.length, 1, 'Report type select is visible');
        assert.equal(reportType.find(':selected').text().trim(), 'Admissions Detail', 'Default value selected"');
      });
    });
  });

  testSimpleReportForm('Admissions Summary');
  testSimpleReportForm('Diagnostic Testing');
  testSimpleReportForm('Discharges Detail');
  testSimpleReportForm('Discharges Summary');
  testSimpleReportForm('Procedures Detail');

  (0, _qunit.test)('View reports tab | Patient Status', function (assert) {
    runWithPouchDump('default', function () {
      authenticateUser();
      visit('/patients/reports');
      select('[data-test-selector="select-report-type"] select', 'Patient Status');

      andThen(function () {
        var generateReportButton = find('button:contains(Generate Report)');
        assert.equal(currentURL(), '/patients/reports');
        assert.equal(generateReportButton.length, 1, 'Generate Report button is visible');
        var reportType = find('[data-test-selector="select-report-type"] select');
        assert.equal(reportType.length, 1, 'Report type select is visible');
        assert.equal(reportType.find(':selected').text().trim(), 'Patient Status', 'Default value selected"');
      });
    });
  });

  (0, _qunit.test)('Adding a new patient record', function (assert) {
    runWithPouchDump('default', function () {
      authenticateUser();
      visit('/patients/edit/new');
      andThen(function () {
        assert.equal(currentURL(), '/patients/edit/new');
      });

      fillIn('.test-first-name input', 'John');
      fillIn('.test-last-name input', 'Doe');
      click('.panel-footer button:contains(Add)');
      waitToAppear('.modal-dialog');
      andThen(function () {
        assert.equal(find('.modal-title').text(), 'Patient Saved', 'Patient record has been saved');
        assert.equal(find('.modal-body').text().trim(), 'The patient record for John Doe has been saved.', 'Record has been saved');
      });
      click('button:contains(Close)');
      waitToAppear('.patient-summary');

      andThen(function () {
        findWithAssert('.patient-summary');
      });
      andThen(function () {
        findWithAssert('#general');
      });
    });
  });

  function testSimpleReportForm(reportName) {
    (0, _qunit.test)('View reports tab | ' + reportName + ' shows start and end dates', function (assert) {
      runWithPouchDump('default', function () {
        authenticateUser();
        visit('/patients/reports');
        select('[data-test-selector="select-report-type"] select', reportName);

        andThen(function () {
          var reportStartDate = find('[data-test-selector="select-report-start-date"]');
          var reportEndDate = find('[data-test-selector="select-report-end-date"]');
          assert.equal(reportStartDate.length, 1, 'Report start date select is visible');
          assert.equal(reportEndDate.length, 1, 'Report end date select is visible');
          var reportType = find('[data-test-selector="select-report-type"] select');
          assert.equal(reportType.find(':selected').text().trim(), reportName, reportName + ' option selected');
        });
      });
    });
  }
});
define('hospitalrun/tests/acceptance/patients-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - acceptance');
  test('acceptance/patients-test.js should pass jscs', function () {
    ok(true, 'acceptance/patients-test.js should pass jscs.');
  });
});
define('hospitalrun/tests/acceptance/pricing-test', ['exports', 'ember', 'qunit', 'hospitalrun/tests/helpers/start-app'], function (exports, _ember, _qunit, _hospitalrunTestsHelpersStartApp) {
  'use strict';

  function verifyPricingLists(path, includesPrices, excludesPrices, assert) {
    runWithPouchDump('billing', function () {
      authenticateUser();
      visit(path);
      andThen(function () {
        assert.equal(currentURL(), path);
        includesPrices.forEach(function (priceName) {
          assert.equal(find('.price-name:contains(' + priceName + ')').length, 1, priceName + ' displays');
        });
        excludesPrices.forEach(function (priceName) {
          assert.equal(find('.price-name:contains(' + priceName + ')').length, 0, priceName + ' is not present');
        });
      });
    });
  }

  (0, _qunit.module)('Acceptance | pricing', {
    beforeEach: function beforeEach() {
      this.application = (0, _hospitalrunTestsHelpersStartApp['default'])();
    },

    afterEach: function afterEach() {
      _ember['default'].run(this.application, 'destroy');
    }
  });

  (0, _qunit.test)('visiting /pricing', function (assert) {
    var includesPrices = ['Xray Hand', 'Blood test', 'Leg Casting', 'Gauze pad'];
    verifyPricingLists('/pricing', includesPrices, [], assert);
  });

  (0, _qunit.test)('visiting /pricing/imaging', function (assert) {
    var excludesPrices = ['Blood test', 'Leg Casting', 'Gauze pad'];
    var includesPrices = ['Xray Hand'];
    verifyPricingLists('/pricing/imaging', includesPrices, excludesPrices, assert);
  });

  (0, _qunit.test)('visiting /pricing/lab', function (assert) {
    var excludesPrices = ['Xray Hand', 'Leg Casting', 'Gauze pad'];
    var includesPrices = ['Blood test'];
    verifyPricingLists('/pricing/lab', includesPrices, excludesPrices, assert);
  });

  (0, _qunit.test)('visiting /pricing/procedure', function (assert) {
    var excludesPrices = ['Xray Hand', 'Blood test', 'Gauze pad'];
    var includesPrices = ['Leg Casting'];
    verifyPricingLists('/pricing/procedure', includesPrices, excludesPrices, assert);
  });

  (0, _qunit.test)('visiting /pricing/ward', function (assert) {
    var excludesPrices = ['Xray Hand', 'Blood test', 'Leg Casting'];
    var includesPrices = ['Gauze pad'];
    verifyPricingLists('/pricing/ward', includesPrices, excludesPrices, assert);
  });

  (0, _qunit.test)('create new price', function (assert) {
    runWithPouchDump('billing', function () {
      authenticateUser();
      visit('/pricing/edit/new');
      andThen(function () {
        assert.equal(currentURL(), '/pricing/edit/new');
        fillIn('.price-name input', 'Xray Foot');
        fillIn('.price-amount input', 100);
        fillIn('.price-department input', 'Imaging');
        select('.price-category', 'Imaging');
        fillIn('.price-type', 'Imaging Procedure');
        click('button:contains(Add):last');
        waitToAppear('.modal-dialog');
        andThen(function () {
          assert.equal(find('.modal-title').text(), 'Pricing Item Saved', 'Pricing Item saved');
          click('button:contains(Ok)');
        });
        andThen(function () {
          click('button:contains(Add Override)');
          waitToAppear('.modal-dialog');
        });
        andThen(function () {
          assert.equal(find('.modal-title').text(), 'Add Override', 'Add Override Dialog displays');
          select('.pricing-profile', 'Half off');
          fillIn('.pricing-override-price input', 20);
        });
        andThen(function () {
          click('button:contains(Add):last');
          waitToAppear('.override-profile');
        });
        andThen(function () {
          assert.equal(find('.override-profile').text(), 'Half off', 'Pricing override saved');
        });
      });
    });
  });

  (0, _qunit.test)('delete price', function (assert) {
    runWithPouchDump('billing', function () {
      authenticateUser();
      visit('/pricing/lab');
      andThen(function () {
        assert.equal(currentURL(), '/pricing/lab');
        assert.equal(find('.price-name:contains(Blood test)').length, 1, 'Price exists to delete');
        click('button:contains(Delete)');
      });
      waitToAppear('.modal-dialog');
      andThen(function () {
        assert.equal(find('.alert').text().trim(), 'Are you sure you wish to delete <strong>Blood test</strong>?', 'Pricing item is displayed for deletion');
      });
      click('button:contains(Delete):last');
      waitToDisappear('.price-name:contains(Blood test)');
      andThen(function () {
        assert.equal(find('.price-name:contains(Blood test)').length, 0, 'Price disappears from price list');
      });
    });
  });

  (0, _qunit.test)('create new pricing profile', function (assert) {
    runWithPouchDump('billing', function () {
      authenticateUser();
      visit('/pricing/profiles');
      andThen(function () {
        assert.equal(currentURL(), '/pricing/profiles');
        click('button:contains(+ new item)');
        waitToAppear('.modal-dialog');
        andThen(function () {
          assert.equal(find('.modal-title').text(), 'New Pricing Profile', 'New Pricing Profile modal appears');
        });
        fillIn('.pricing-profile-name input', 'Quarter Off');
        fillIn('.pricing-profile-percentage input', 25);
        fillIn('.pricing-profile-discount input', 10);
        andThen(function () {
          click('button:contains(Add)');
        });
        waitToAppear('.modal-title:contains(Pricing Profile Saved)');
        click('button:contains(Ok)');
        waitToAppear('.pricing-profile-name:contains(Quarter Off)');
        andThen(function () {
          assert.equal(find('.pricing-profile-name:contains(Quarter Off)').text(), 'Quarter Off', 'New price profile displays');
        });
      });
    });
  });

  (0, _qunit.test)('delete pricing profile', function (assert) {
    runWithPouchDump('billing', function () {
      authenticateUser();
      visit('/pricing/profiles');
      andThen(function () {
        assert.equal(currentURL(), '/pricing/profiles');
        assert.equal(find('.pricing-profile-name:contains(Half off)').length, 1, 'Pricing profile exists to delete');
        click('button:contains(Delete)');
      });
      waitToAppear('.modal-dialog');
      andThen(function () {
        assert.equal(find('.modal-title').text().trim(), 'Delete Profile', 'Pricing Profile delete confirmation is displayed');
      });
      click('button:contains(Ok)');
      waitToDisappear('.pricing-profile-name:contains(Half off)');
      andThen(function () {
        assert.equal(find('.pricing-profile-name:contains(Half off)').length, 0, 'Pricing profile disappears from list');
      });
    });
  });
});
define('hospitalrun/tests/acceptance/pricing-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - acceptance');
  test('acceptance/pricing-test.js should pass jscs', function () {
    ok(true, 'acceptance/pricing-test.js should pass jscs.');
  });
});
define('hospitalrun/tests/acceptance/role-test', ['exports', 'ember', 'qunit', 'hospitalrun/tests/helpers/start-app'], function (exports, _ember, _qunit, _hospitalrunTestsHelpersStartApp) {
  'use strict';

  (0, _qunit.module)('Acceptance | roles', {
    beforeEach: function beforeEach() {
      this.application = (0, _hospitalrunTestsHelpersStartApp['default'])();
    },

    afterEach: function afterEach() {
      _ember['default'].run(this.application, 'destroy');
    }
  });

  (0, _qunit.test)('visiting /admin/roles', function (assert) {
    runWithPouchDump('admin', function () {
      authenticateUser();
      visit('/admin/roles');
      andThen(function () {
        assert.equal(currentURL(), '/admin/roles');
        select('.role-select', 'Doctor');
      });
      andThen(function () {
        assert.equal(find('.checkbox-appointments input:checked').length, 0, 'Appointments checkbox is not checked');
        assert.equal(find('.checkbox-add_appointment input:checked').length, 0, 'Add appointments checkbox is not checked');
      });
      click('.checkbox-appointments input');
      click('.checkbox-add_appointment input');
      andThen(function () {
        assert.equal(find('.checkbox-appointments input:checked').length, 1, 'Appointments checkbox is checked');
        assert.equal(find('.checkbox-add_appointment input:checked').length, 1, 'Add appointments checkbox is checked');
        click('button:contains(Update)');
        waitToAppear('.modal-dialog');
      });
      andThen(function () {
        assert.equal(find('.modal-title').text(), 'Role Saved', 'Role has been saved');
        assert.equal(find('.modal-body').text().trim(), 'The Doctor role has been saved.', 'Doctor role has been saved');
        click('button:contains(Ok)');
        invalidateSession();
        visit('/login');
      });
      andThen(function () {
        authenticateUser({
          name: 'doctor@hospitalrun.io',
          roles: ['Doctor', 'user'],
          role: 'Doctor',
          prefix: 'p1'
        });
      });
      visit('/appointments/edit/new');
      andThen(function () {
        assert.equal(currentURL(), '/appointments/edit/new', 'Doctor can now navigate to new appointments');
        assert.equal(find('.view-current-title').text(), 'New Appointment', 'New appointment screen displays');
      });
    });
  });
});
define('hospitalrun/tests/acceptance/role-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - acceptance');
  test('acceptance/role-test.js should pass jscs', function () {
    ok(true, 'acceptance/role-test.js should pass jscs.');
  });
});
define('hospitalrun/tests/acceptance/users-test', ['exports', 'ember', 'qunit', 'hospitalrun/tests/helpers/start-app', 'ember-cli-fake-server'], function (exports, _ember, _qunit, _hospitalrunTestsHelpersStartApp, _emberCliFakeServer) {
  'use strict';

  function addAllUsers(assert) {
    (0, _emberCliFakeServer.stubRequest)('get', '/db/_users/_all_docs', function (request) {
      var expectedQuery = {
        include_docs: 'true',
        startkey: '"org.couchdb.user"'
      };
      assert.equal(JSON.stringify(request.queryParams), JSON.stringify(expectedQuery), 'All Users request sent to the server');
      request.ok({
        'total_rows': 1,
        'offset': 1,
        'rows': [{
          'id': 'org.couchdb.user:hradmin',
          'key': 'org.couchdb.user:hradmin',
          'value': { 'rev': '1-242f3d5b5eb8596144f8a6300f9f5a2f' },
          'doc': {
            '_id': 'org.couchdb.user:hradmin',
            '_rev': '1-242f3d5b5eb8596144f8a6300f9f5a2f',
            'password_scheme': 'pwdscheme',
            'iterations': 10,
            'name': 'hradmin',
            'roles': ['System Administrator', 'admin', 'user'],
            'type': 'user',
            'userPrefix': 'p',
            'derived_key': 'derivedkeyhere',
            'salt': 'saltgoeshere',
            'displayName': 'HospitalRun Administrator',
            'email': 'hradmin@hospitalrun.io'
          }
        }, {
          'id': 'org.couchdb.user:joe@donuts.com',
          'key': 'org.couchdb.user:joe@donuts.com',
          'value': {
            'rev': '1-ef3d54502f2cc8e8f73d8547881f0836'
          },
          'doc': {
            '_id': 'org.couchdb.user:joe@donuts.com',
            '_rev': '1-ef3d54502f2cc8e8f73d8547881f0836',
            'password_scheme': 'pbkdf2',
            'iterations': 10,
            'displayName': 'Joe Bagadonuts',
            'email': 'joe@donuts.com',
            'name': 'joe@donuts.com',
            'roles': ['Hospital Administrator', 'user'],
            'userPrefix': 'p01',
            'type': 'user',
            'derived_key': 'derivedkeyhere',
            'salt': 'saltgoeshere'
          }
        }]
      });
    });
  }

  (0, _qunit.module)('Acceptance | users', {
    beforeEach: function beforeEach() {
      _emberCliFakeServer['default'].start();
      this.application = (0, _hospitalrunTestsHelpersStartApp['default'])();
    },

    afterEach: function afterEach() {
      _emberCliFakeServer['default'].stop();
      _ember['default'].run(this.application, 'destroy');
    }
  });

  (0, _qunit.test)('visiting /admin/users', function (assert) {
    runWithPouchDump('default', function () {
      authenticateUser();
      addAllUsers(assert);

      visit('/admin/users');
      andThen(function () {
        assert.equal(currentURL(), '/admin/users');
        assert.equal(find('td.user-display-name:first').text(), 'HospitalRun Administrator');
        assert.equal(find('td.user-name:first').text(), 'hradmin');
        assert.equal(find('td.user-email:first').text(), 'hradmin@hospitalrun.io');
        assert.equal(find('td.user-role:first').text(), 'System Administrator');
      });
    });
  });

  (0, _qunit.test)('create new user', function (assert) {
    runWithPouchDump('default', function () {
      authenticateUser();
      addAllUsers(assert);
      visit('/admin/users');
      (0, _emberCliFakeServer.stubRequest)('put', '/db/_users/org.couchdb.user:jane@donuts.com', function (request) {
        var expectedBody = {
          _id: 'org.couchdb.user:jane@donuts.com',
          deleted: false,
          displayName: 'Jane Bagadonuts',
          email: 'jane@donuts.com',
          name: 'jane@donuts.com',
          password: 'password',
          roles: ['Hospital Administrator', 'user'],
          userPrefix: 'p02',
          type: 'user'
        };
        assert.equal(request.requestBody, JSON.stringify(expectedBody), 'New user data sent to the server');
        request.ok({
          'ok': true,
          'id': 'org.couchdb.user:jane@donuts.com',
          'rev': '1-ef3d54502f2cc8e8f73d8547881f0836'
        });
      });

      visit('/admin/users/edit/new');
      andThen(function () {
        select('.user-role', 'Hospital Administrator');
        fillIn('.user-display-name input', 'Jane Bagadonuts');
        fillIn('.user-email input', 'jane@donuts.com');
        fillIn('.user-password input', 'password');
        click('button:contains(Add)');
        waitToAppear('.modal-dialog');
        andThen(function () {
          assert.equal(find('.modal-title').text(), 'User Saved', 'User was saved successfully');
        });
        click('button:contains(Ok)');
      });
    });
  });

  (0, _qunit.test)('delete user', function (assert) {
    runWithPouchDump('default', function () {
      authenticateUser();
      addAllUsers(assert);
      (0, _emberCliFakeServer.stubRequest)('put', '/db/_users/org.couchdb.user:joe@donuts.com', function (request) {
        var expectedBody = {
          _id: 'org.couchdb.user:joe@donuts.com',
          derived_key: 'derivedkeyhere',
          deleted: true,
          displayName: 'Joe Bagadonuts',
          email: 'joe@donuts.com',
          iterations: 10,
          name: 'joe@donuts.com',
          password_scheme: 'pbkdf2',
          _rev: '1-ef3d54502f2cc8e8f73d8547881f0836',
          roles: ['deleted'],
          salt: 'saltgoeshere',
          userPrefix: 'p01',
          type: 'user'
        };
        assert.equal(request.requestBody, JSON.stringify(expectedBody), 'Delete user request sent to the server');
        request.ok({
          'ok': true,
          'id': 'org.couchdb.user:joe@donuts.com',
          'rev': '1-ef3d54502f2cc8e8f73d8547881f0836'
        });
      });

      visit('/admin/users');
      andThen(function () {
        click('button:contains(Delete):last');
        waitToAppear('.modal-dialog');
        andThen(function () {
          assert.equal(find('.alert').text().trim(), 'Are you sure you wish to delete the user joe@donuts.com?', 'User is displayed for deletion');
        });
        click('button:contains(Delete):last');
        andThen(function () {
          assert.equal(find('.user-email:contains(joe@donuts.com)').length, 0, 'User disappears from user list');
        });
      });
    });
  });
});
define('hospitalrun/tests/acceptance/users-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - acceptance');
  test('acceptance/users-test.js should pass jscs', function () {
    ok(true, 'acceptance/users-test.js should pass jscs.');
  });
});
define('hospitalrun/tests/adapters/application.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - adapters');
  test('adapters/application.js should pass jscs', function () {
    ok(true, 'adapters/application.js should pass jscs.');
  });
});
define('hospitalrun/tests/adapters/user.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - adapters');
  test('adapters/user.js should pass jscs', function () {
    ok(true, 'adapters/user.js should pass jscs.');
  });
});
define('hospitalrun/tests/admin/address/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - admin/address');
  test('admin/address/controller.js should pass jscs', function () {
    ok(true, 'admin/address/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/admin/address/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - admin/address');
  test('admin/address/route.js should pass jscs', function () {
    ok(true, 'admin/address/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/admin/loaddb/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - admin/loaddb');
  test('admin/loaddb/controller.js should pass jscs', function () {
    ok(true, 'admin/loaddb/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/admin/loaddb/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - admin/loaddb');
  test('admin/loaddb/route.js should pass jscs', function () {
    ok(true, 'admin/loaddb/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/admin/lookup/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - admin/lookup');
  test('admin/lookup/controller.js should pass jscs', function () {
    ok(true, 'admin/lookup/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/admin/lookup/edit/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - admin/lookup/edit');
  test('admin/lookup/edit/controller.js should pass jscs', function () {
    ok(true, 'admin/lookup/edit/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/admin/lookup/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - admin/lookup');
  test('admin/lookup/route.js should pass jscs', function () {
    ok(true, 'admin/lookup/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/admin/query/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - admin/query');
  test('admin/query/controller.js should pass jscs', function () {
    ok(true, 'admin/query/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/admin/query/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - admin/query');
  test('admin/query/route.js should pass jscs', function () {
    ok(true, 'admin/query/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/admin/roles/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - admin/roles');
  test('admin/roles/controller.js should pass jscs', function () {
    ok(true, 'admin/roles/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/admin/roles/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - admin/roles');
  test('admin/roles/route.js should pass jscs', function () {
    ok(true, 'admin/roles/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/admin/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - admin');
  test('admin/route.js should pass jscs', function () {
    ok(true, 'admin/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/app.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - .');
  test('app.js should pass jscs', function () {
    ok(true, 'app.js should pass jscs.');
  });
});
define('hospitalrun/tests/app.stylelint-test', ['exports'], function (exports) {
  'use strict';

  module('Style Lint');
  test('app.scss should pass stylelint', function () {
    ok('true , app.scss passed stylelint');
  });
});
define('hospitalrun/tests/appointments/delete/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - appointments/delete');
  test('appointments/delete/controller.js should pass jscs', function () {
    ok(true, 'appointments/delete/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/appointments/edit/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - appointments/edit');
  test('appointments/edit/controller.js should pass jscs', function () {
    ok(true, 'appointments/edit/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/appointments/edit/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - appointments/edit');
  test('appointments/edit/route.js should pass jscs', function () {
    ok(true, 'appointments/edit/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/appointments/index/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - appointments/index');
  test('appointments/index/controller.js should pass jscs', function () {
    ok(true, 'appointments/index/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/appointments/index/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - appointments/index');
  test('appointments/index/route.js should pass jscs', function () {
    ok(true, 'appointments/index/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/appointments/missed/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - appointments/missed');
  test('appointments/missed/controller.js should pass jscs', function () {
    ok(true, 'appointments/missed/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/appointments/missed/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - appointments/missed');
  test('appointments/missed/route.js should pass jscs', function () {
    ok(true, 'appointments/missed/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/appointments/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - appointments');
  test('appointments/route.js should pass jscs', function () {
    ok(true, 'appointments/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/appointments/search/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - appointments/search');
  test('appointments/search/controller.js should pass jscs', function () {
    ok(true, 'appointments/search/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/appointments/search/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - appointments/search');
  test('appointments/search/route.js should pass jscs', function () {
    ok(true, 'appointments/search/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/appointments/today/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - appointments/today');
  test('appointments/today/controller.js should pass jscs', function () {
    ok(true, 'appointments/today/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/appointments/today/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - appointments/today');
  test('appointments/today/route.js should pass jscs', function () {
    ok(true, 'appointments/today/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/authenticators/custom.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - authenticators');
  test('authenticators/custom.js should pass jscs', function () {
    ok(true, 'authenticators/custom.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/_form_styles.stylelint-test', ['exports'], function (exports) {
  'use strict';

  module('Style Lint');
  test('components/_form_styles.scss should pass stylelint', function () {
    ok('true , components/_form_styles.scss passed stylelint');
  });
});
define('hospitalrun/tests/components/_imaging.stylelint-test', ['exports'], function (exports) {
  'use strict';

  module('Style Lint');
  test('components/_imaging.scss should pass stylelint', function () {
    ok('true , components/_imaging.scss passed stylelint');
  });
});
define('hospitalrun/tests/components/_labs.stylelint-test', ['exports'], function (exports) {
  'use strict';

  module('Style Lint');
  test('components/_labs.scss should pass stylelint', function () {
    ok('true , components/_labs.scss passed stylelint');
  });
});
define('hospitalrun/tests/components/_pagination.stylelint-test', ['exports'], function (exports) {
  'use strict';

  module('Style Lint');
  test('components/_pagination.scss should pass stylelint', function () {
    ok('true , components/_pagination.scss passed stylelint');
  });
});
define('hospitalrun/tests/components/_panel.stylelint-test', ['exports'], function (exports) {
  'use strict';

  module('Style Lint');
  test('components/_panel.scss should pass stylelint', function () {
    ok('true , components/_panel.scss passed stylelint');
  });
});
define('hospitalrun/tests/components/_patient_history.stylelint-test', ['exports'], function (exports) {
  'use strict';

  module('Style Lint');
  test('components/_patient_history.scss should pass stylelint', function () {
    ok('true , components/_patient_history.scss passed stylelint');
  });
});
define('hospitalrun/tests/components/_patient_summary.stylelint-test', ['exports'], function (exports) {
  'use strict';

  module('Style Lint');
  test('components/_patient_summary.scss should pass stylelint', function () {
    ok('true , components/_patient_summary.scss passed stylelint');
  });
});
define('hospitalrun/tests/components/_sidebar_nav.stylelint-test', ['exports'], function (exports) {
  'use strict';

  module('Style Lint');
  test('components/_sidebar_nav.scss should pass stylelint', function () {
    ok('true , components/_sidebar_nav.scss passed stylelint');
  });
});
define('hospitalrun/tests/components/_tab_content.stylelint-test', ['exports'], function (exports) {
  'use strict';

  module('Style Lint');
  test('components/_tab_content.scss should pass stylelint', function () {
    ok('true , components/_tab_content.scss passed stylelint');
  });
});
define('hospitalrun/tests/components/_tab_nav.stylelint-test', ['exports'], function (exports) {
  'use strict';

  module('Style Lint');
  test('components/_tab_nav.scss should pass stylelint', function () {
    ok('true , components/_tab_nav.scss passed stylelint');
  });
});
define('hospitalrun/tests/components/action-checkbox.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/action-checkbox.js should pass jscs', function () {
    ok(true, 'components/action-checkbox.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/array-display.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/array-display.js should pass jscs', function () {
    ok(true, 'components/array-display.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/charge-quantity.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/charge-quantity.js should pass jscs', function () {
    ok(true, 'components/charge-quantity.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/charges-by-type-tab.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/charges-by-type-tab.js should pass jscs', function () {
    ok(true, 'components/charges-by-type-tab.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/checkbox-or-typeahead.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/checkbox-or-typeahead.js should pass jscs', function () {
    ok(true, 'components/checkbox-or-typeahead.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/custom-form.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/custom-form.js should pass jscs', function () {
    ok(true, 'components/custom-form.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/date-input.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/date-input.js should pass jscs', function () {
    ok(true, 'components/date-input.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/date-picker.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/date-picker.js should pass jscs', function () {
    ok(true, 'components/date-picker.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/edit-panel.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/edit-panel.js should pass jscs', function () {
    ok(true, 'components/edit-panel.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/ext-radio.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/ext-radio.js should pass jscs', function () {
    ok(true, 'components/ext-radio.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/file-upload.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/file-upload.js should pass jscs', function () {
    ok(true, 'components/file-upload.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/icd10-pcs-typeahead.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/icd10-pcs-typeahead.js should pass jscs', function () {
    ok(true, 'components/icd10-pcs-typeahead.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/icd10-typeahead.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/icd10-typeahead.js should pass jscs', function () {
    ok(true, 'components/icd10-typeahead.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/image-upload.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/image-upload.js should pass jscs', function () {
    ok(true, 'components/image-upload.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/inventory-location-picker.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/inventory-location-picker.js should pass jscs', function () {
    ok(true, 'components/inventory-location-picker.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/inventory-typeahead.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/inventory-typeahead.js should pass jscs', function () {
    ok(true, 'components/inventory-typeahead.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/item-listing.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/item-listing.js should pass jscs', function () {
    ok(true, 'components/item-listing.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/loading-message.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/loading-message.js should pass jscs', function () {
    ok(true, 'components/loading-message.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/location-select.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/location-select.js should pass jscs', function () {
    ok(true, 'components/location-select.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/modal-dialog.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/modal-dialog.js should pass jscs', function () {
    ok(true, 'components/modal-dialog.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/nav-menu.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/nav-menu.js should pass jscs', function () {
    ok(true, 'components/nav-menu.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/nav-paging.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/nav-paging.js should pass jscs', function () {
    ok(true, 'components/nav-paging.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/patient-summary.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/patient-summary.js should pass jscs', function () {
    ok(true, 'components/patient-summary.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/patient-typeahead.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/patient-typeahead.js should pass jscs', function () {
    ok(true, 'components/patient-typeahead.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/photo-display.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/photo-display.js should pass jscs', function () {
    ok(true, 'components/photo-display.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/price-list.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/price-list.js should pass jscs', function () {
    ok(true, 'components/price-list.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/pricing-typeahead.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/pricing-typeahead.js should pass jscs', function () {
    ok(true, 'components/pricing-typeahead.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/print-this.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/print-this.js should pass jscs', function () {
    ok(true, 'components/print-this.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/quantity-calc.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/quantity-calc.js should pass jscs', function () {
    ok(true, 'components/quantity-calc.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/quantity-conv.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/quantity-conv.js should pass jscs', function () {
    ok(true, 'components/quantity-conv.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/role-select.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/role-select.js should pass jscs', function () {
    ok(true, 'components/role-select.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/search-listing.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/search-listing.js should pass jscs', function () {
    ok(true, 'components/search-listing.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/select-or-typeahead.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/select-or-typeahead.js should pass jscs', function () {
    ok(true, 'components/select-or-typeahead.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/smart-prescription.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/smart-prescription.js should pass jscs', function () {
    ok(true, 'components/smart-prescription.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/sortable-column.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/sortable-column.js should pass jscs', function () {
    ok(true, 'components/sortable-column.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/take-photo.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/take-photo.js should pass jscs', function () {
    ok(true, 'components/take-photo.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/text-search.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/text-search.js should pass jscs', function () {
    ok(true, 'components/text-search.js should pass jscs.');
  });
});
define('hospitalrun/tests/components/type-ahead.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - components');
  test('components/type-ahead.js should pass jscs', function () {
    ok(true, 'components/type-ahead.js should pass jscs.');
  });
});
define('hospitalrun/tests/controllers/abstract-delete-controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - controllers');
  test('controllers/abstract-delete-controller.js should pass jscs', function () {
    ok(true, 'controllers/abstract-delete-controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/controllers/abstract-edit-controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - controllers');
  test('controllers/abstract-edit-controller.js should pass jscs', function () {
    ok(true, 'controllers/abstract-edit-controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/controllers/abstract-paged-controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - controllers');
  test('controllers/abstract-paged-controller.js should pass jscs', function () {
    ok(true, 'controllers/abstract-paged-controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/controllers/abstract-report-controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - controllers');
  test('controllers/abstract-report-controller.js should pass jscs', function () {
    ok(true, 'controllers/abstract-report-controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/controllers/application.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - controllers');
  test('controllers/application.js should pass jscs', function () {
    ok(true, 'controllers/application.js should pass jscs.');
  });
});
define('hospitalrun/tests/controllers/index.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - controllers');
  test('controllers/index.js should pass jscs', function () {
    ok(true, 'controllers/index.js should pass jscs.');
  });
});
define('hospitalrun/tests/controllers/login.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - controllers');
  test('controllers/login.js should pass jscs', function () {
    ok(true, 'controllers/login.js should pass jscs.');
  });
});
define('hospitalrun/tests/controllers/navigation.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - controllers');
  test('controllers/navigation.js should pass jscs', function () {
    ok(true, 'controllers/navigation.js should pass jscs.');
  });
});
define('hospitalrun/tests/dialog/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - dialog');
  test('dialog/controller.js should pass jscs', function () {
    ok(true, 'dialog/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/finishgauth/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - finishgauth');
  test('finishgauth/route.js should pass jscs', function () {
    ok(true, 'finishgauth/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/helpers/authenticate-user', ['exports', 'ember', 'hospitalrun/tests/helpers/ember-simple-auth'], function (exports, _ember, _hospitalrunTestsHelpersEmberSimpleAuth) {
  'use strict';

  var merge = _ember['default'].merge;

  _ember['default'].Test.registerHelper('authenticateUser', function (app) {
    var attrs = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var expiresAt = new Date().getTime() + 600000;
    (0, _hospitalrunTestsHelpersEmberSimpleAuth.authenticateSession)(app, merge({
      name: 'hradmin',
      roles: ['System Administrator', 'admin', 'user'],
      expires_at: expiresAt,
      role: 'System Administrator',
      prefix: 'p1'
    }, attrs));
  });

  _ember['default'].Test.registerHelper('invalidateSession', function (app) {
    (0, _hospitalrunTestsHelpersEmberSimpleAuth.invalidateSession)(app);
  });
});
define('hospitalrun/tests/helpers/authenticate-user.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/authenticate-user.js should pass jscs', function () {
    ok(true, 'helpers/authenticate-user.js should pass jscs.');
  });
});
define('hospitalrun/tests/helpers/date-format.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/date-format.js should pass jscs', function () {
    ok(true, 'helpers/date-format.js should pass jscs.');
  });
});
define('hospitalrun/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('hospitalrun/tests/helpers/destroy-app.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/destroy-app.js should pass jscs', function () {
    ok(true, 'helpers/destroy-app.js should pass jscs.');
  });
});
define('hospitalrun/tests/helpers/ember-i18n/test-helpers', ['exports', 'ember'], function (exports, _ember) {

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  _ember['default'].Test.registerHelper('t', function (app, key, interpolations) {
    var i18n = app.__container__.lookup('service:i18n');
    return i18n.t(key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  _ember['default'].Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = app.testHelpers.t(key, interpolations);

    assertTranslation(element, key, text);
  });

  var assertTranslation = (function () {
    if (typeof QUnit !== 'undefined' && typeof ok === 'function') {
      return function (element, key, text) {
        ok(find(element + ':contains(' + text + ')').length, 'Found translation key ' + key + ' in ' + element);
      };
    } else if (typeof expect === 'function') {
      return function (element, key, text) {
        var found = !!find(element + ':contains(' + text + ')').length;
        expect(found).to.equal(true);
      };
    } else {
      return function () {
        throw new Error("ember-i18n could not find a compatible test framework");
      };
    }
  })();
});
define('hospitalrun/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _emberSimpleAuthAuthenticatorsTest) {
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;

  var TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    var authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _emberSimpleAuthAuthenticatorsTest['default']);
    }
  }

  function authenticateSession(app, sessionData) {
    var container = app.__container__;

    var session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return wait();
  }

  ;

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  ;

  function invalidateSession(app) {
    var session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return wait();
  }

  ;
});
define('hospitalrun/tests/helpers/html-line-break.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/html-line-break.js should pass jscs', function () {
    ok(true, 'helpers/html-line-break.js should pass jscs.');
  });
});
define('hospitalrun/tests/helpers/is-equal-array.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/is-equal-array.js should pass jscs', function () {
    ok(true, 'helpers/is-equal-array.js should pass jscs.');
  });
});
define('hospitalrun/tests/helpers/is-equal.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/is-equal.js should pass jscs', function () {
    ok(true, 'helpers/is-equal.js should pass jscs.');
  });
});
define('hospitalrun/tests/helpers/is-not.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/is-not.js should pass jscs', function () {
    ok(true, 'helpers/is-not.js should pass jscs.');
  });
});
define('hospitalrun/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'hospitalrun/tests/helpers/start-app', 'hospitalrun/tests/helpers/destroy-app'], function (exports, _qunit, _hospitalrunTestsHelpersStartApp, _hospitalrunTestsHelpersDestroyApp) {
  'use strict';

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _hospitalrunTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _hospitalrunTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('hospitalrun/tests/helpers/module-for-acceptance.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/module-for-acceptance.js should pass jscs', function () {
    ok(true, 'helpers/module-for-acceptance.js should pass jscs.');
  });
});
define('hospitalrun/tests/helpers/number-format.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/number-format.js should pass jscs', function () {
    ok(true, 'helpers/number-format.js should pass jscs.');
  });
});
define('hospitalrun/tests/helpers/read-path.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/read-path.js should pass jscs', function () {
    ok(true, 'helpers/read-path.js should pass jscs.');
  });
});
define('hospitalrun/tests/helpers/resolver', ['exports', 'hospitalrun/resolver', 'hospitalrun/config/environment'], function (exports, _hospitalrunResolver, _hospitalrunConfigEnvironment) {
  'use strict';

  var resolver = _hospitalrunResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _hospitalrunConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _hospitalrunConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('hospitalrun/tests/helpers/resolver.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/resolver.js should pass jscs', function () {
    ok(true, 'helpers/resolver.js should pass jscs.');
  });
});
define('hospitalrun/tests/helpers/run-with-pouch-dump', ['exports', 'ember', 'pouchdb', 'hospitalrun/services/database', 'hospitalrun/services/config'], function (exports, _ember, _pouchdb, _hospitalrunServicesDatabase, _hospitalrunServicesConfig) {
  /* jshint ignore:start */
  'use strict';

  function cleanupDatabases(dbs) {
    return wait().then(function () {
      return new _ember['default'].RSVP.Promise(function (resolve, reject) {
        if (dbs.main.changesListener) {
          dbs.main.changesListener.cancel();
          dbs.main.changesListener.on('complete', function () {
            destroyDatabases(dbs).then(resolve, reject);
          });
        } else {
          destroyDatabases(dbs).then(resolve, reject);
        }
      });
    });
  }

  function destroyDatabases(dbs) {
    var destroyQueue = [];
    destroyQueue.push(dbs.config.info().then(function () {
      return dbs.config.destroy();
    }));
    destroyQueue.push(dbs.main.info().then(function () {
      return dbs.main.destroy();
    }));
    return _ember['default'].RSVP.all(destroyQueue);
  }

  function runWithPouchDumpAsyncHelper(app, dumpName, functionToRun) {

    var db = new _pouchdb['default']('hospitalrun-test-database', {
      adapter: 'memory'
    });
    var configDB = new _pouchdb['default']('hospitalrun-test-config-database', {
      adapter: 'memory'
    });
    var dump = require('hospitalrun/tests/fixtures/' + dumpName)['default'];
    var promise = db.load(dump, {
      proxy: 'main'
    });

    var InMemoryDatabaseService = _hospitalrunServicesDatabase['default'].extend({
      createDB: function createDB() {
        return promise.then(function () {
          return db;
        });
      }
    });

    var InMemoryConfigService = _hospitalrunServicesConfig['default'].extend({
      createDB: function createDB() {
        return _ember['default'].RSVP.resolve(configDB);
      },
      replicateConfigDB: function replicateConfigDB() {}
    });

    app.__deprecatedInstance__.register('service:config', InMemoryConfigService);
    app.__deprecatedInstance__.register('service:database', InMemoryDatabaseService);

    return new _ember['default'].RSVP.Promise(function (resolve) {
      promise.then(function () {
        functionToRun();
        andThen(function () {
          cleanupDatabases({
            config: configDB,
            main: db
          }).then(resolve);
        });
      });
    });
  }

  _ember['default'].Test.registerAsyncHelper('runWithPouchDump', runWithPouchDumpAsyncHelper);
  /* jshint ignore:end */
});
define('hospitalrun/tests/helpers/run-with-pouch-dump.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/run-with-pouch-dump.js should pass jscs', function () {
    ok(true, 'helpers/run-with-pouch-dump.js should pass jscs.');
  });
});
define('hospitalrun/tests/helpers/select-date', ['exports', 'ember'], function (exports, _ember) {
  // Derived from https://raw.githubusercontent.com/edgycircle/ember-pikaday/master/addon/helpers/pikaday.js
  'use strict';

  function triggerNativeEvent(element, eventName) {
    if (document.createEvent) {
      var event = document.createEvent('Events');
      event.initEvent(eventName, true, false);
      element.dispatchEvent(event);
    } else {
      element.fireEvent('on' + eventName);
    }
  }

  _ember['default'].Test.registerAsyncHelper('selectDate', function (app, selector, date) {
    return new _ember['default'].RSVP.Promise(function (resolve) {
      click(selector);
      waitToAppear('.pika-single:not(.is-hidden)').then(function () {
        fillIn(selector, moment(date).format('l'));
        andThen(function () {
          triggerNativeEvent(app.$(selector)[0], 'change');
          resolve();
        });
      });
    });
  });
});
define('hospitalrun/tests/helpers/select-date.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/select-date.js should pass jscs', function () {
    ok(true, 'helpers/select-date.js should pass jscs.');
  });
});
define('hospitalrun/tests/helpers/select', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  _ember['default'].Test.registerAsyncHelper('select', function (app, selector) {
    for (var _len = arguments.length, texts = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      texts[_key - 2] = arguments[_key];
    }

    var $options = app.testHelpers.findWithAssert(selector + ' option');

    $options.each(function () {
      var _this = this;

      var $option = _ember['default'].$(this);

      _ember['default'].run(function () {
        _this.selected = texts.some(function (text) {
          return $option.is(':contains(\'' + text + '\')');
        });
        if (_this.selected) {
          $option.trigger('change');
        }
      });
    });

    return app.testHelpers.wait();
  });
});
define('hospitalrun/tests/helpers/select.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/select.js should pass jscs', function () {
    ok(true, 'helpers/select.js should pass jscs.');
  });
});
define('hospitalrun/tests/helpers/start-app', ['exports', 'ember', 'hospitalrun/app', 'hospitalrun/config/environment', 'hospitalrun/tests/helpers/run-with-pouch-dump', 'hospitalrun/tests/helpers/authenticate-user', 'hospitalrun/tests/helpers/select', 'hospitalrun/tests/helpers/select-date', 'hospitalrun/tests/helpers/wait-to-appear'], function (exports, _ember, _hospitalrunApp, _hospitalrunConfigEnvironment, _hospitalrunTestsHelpersRunWithPouchDump, _hospitalrunTestsHelpersAuthenticateUser, _hospitalrunTestsHelpersSelect, _hospitalrunTestsHelpersSelectDate, _hospitalrunTestsHelpersWaitToAppear) {
  'use strict';

  exports['default'] = startApp;

  function createTranslationWrapper(original, context) {
    function t(str, data) {
      var result = original.call(context, str, data);
      if (result.indexOf && result.indexOf('Missing translation') > -1) {
        throw new Error(result);
      }

      return result.string || result;
    }

    return t;
  }

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _hospitalrunConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _hospitalrunApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    var translationService = application.__container__.lookup('service:i18n');
    application.__container__.lookup('service:i18n').t = createTranslationWrapper(translationService.t, translationService);

    return application;
  }
});
define('hospitalrun/tests/helpers/start-app.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/start-app.js should pass jscs', function () {
    ok(true, 'helpers/start-app.js should pass jscs.');
  });
});
define('hospitalrun/tests/helpers/validate-properties', ['exports', 'ember', 'ember-qunit'], function (exports, _ember, _emberQunit) {
  exports.testValidPropertyValues = testValidPropertyValues;
  exports.testInvalidPropertyValues = testInvalidPropertyValues;

  var run = _ember['default'].run;

  function validateValues(object, propertyName, values, isTestForValid) {
    var promise = null;
    var validatedValues = [];

    values.forEach(function (value) {
      function handleValidation(errors) {
        var hasErrors = object.get('errors.' + propertyName + '.firstObject');
        if (hasErrors && !isTestForValid || !hasErrors && isTestForValid) {
          validatedValues.push(value);
        }
      }

      run(object, 'set', propertyName, value);

      var objectPromise = null;
      run(function () {
        objectPromise = object.validate().then(handleValidation, handleValidation);
      });

      // Since we are setting the values in a different run loop as we are validating them,
      // we need to chain the promises so that they run sequentially. The wrong value will
      // be validated if the promises execute concurrently
      promise = promise ? promise.then(objectPromise) : objectPromise;
    });

    return promise.then(function () {
      return validatedValues;
    });
  }

  function testPropertyValues(propertyName, values, isTestForValid, context) {
    var validOrInvalid = isTestForValid ? 'Valid' : 'Invalid';
    var testName = validOrInvalid + ' ' + propertyName;

    (0, _emberQunit.test)(testName, function (assert) {
      var object = this.subject();

      if (context && typeof context === 'function') {
        context(object);
      }

      // Use QUnit.dump.parse so null and undefined can be printed as literal 'null' and
      // 'undefined' strings in the assert message.
      var valuesString = QUnit.dump.parse(values).replace(/\n(\s+)?/g, '').replace(/,/g, ', ');
      var assertMessage = 'Expected ' + propertyName + ' to have ' + validOrInvalid.toLowerCase() + ' values: ' + valuesString;

      return validateValues(object, propertyName, values, isTestForValid).then(function (validatedValues) {
        assert.deepEqual(validatedValues, values, assertMessage);
      });
    });
  }

  function testValidPropertyValues(propertyName, values, context) {
    testPropertyValues(propertyName, values, true, context);
  }

  function testInvalidPropertyValues(propertyName, values, context) {
    testPropertyValues(propertyName, values, false, context);
  }
});
define('hospitalrun/tests/helpers/wait-to-appear', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  function isVisible(selector) {
    return $(selector).length > 0;
  }

  function checkVisibility(selector, interval, resolve, visibility) {
    if (isVisible(selector) === visibility) {
      resolve($(selector));
    } else {
      _ember['default'].run.later(null, function () {
        checkVisibility(selector, interval, resolve, visibility);
      }, interval);
    }
  }

  function waitToAppear(app, selector) {
    var interval = arguments.length <= 2 || arguments[2] === undefined ? 200 : arguments[2];

    return new _ember['default'].RSVP.Promise(function (resolve) {
      checkVisibility(selector, interval, resolve, true);
    });
  }

  function waitToDisappear(app, selector) {
    var interval = arguments.length <= 2 || arguments[2] === undefined ? 200 : arguments[2];

    return new _ember['default'].RSVP.Promise(function (resolve) {
      checkVisibility(selector, interval, resolve, false);
    });
  }
  _ember['default'].Test.registerAsyncHelper('waitToAppear', waitToAppear);
  _ember['default'].Test.registerAsyncHelper('waitToDisappear', waitToDisappear);
});
define('hospitalrun/tests/helpers/wait-to-appear.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - helpers');
  test('helpers/wait-to-appear.js should pass jscs', function () {
    ok(true, 'helpers/wait-to-appear.js should pass jscs.');
  });
});
define('hospitalrun/tests/imaging/charge/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - imaging/charge');
  test('imaging/charge/controller.js should pass jscs', function () {
    ok(true, 'imaging/charge/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/imaging/completed/completed-list-item/component.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - imaging/completed/completed-list-item');
  test('imaging/completed/completed-list-item/component.js should pass jscs', function () {
    ok(true, 'imaging/completed/completed-list-item/component.js should pass jscs.');
  });
});
define('hospitalrun/tests/imaging/completed/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - imaging/completed');
  test('imaging/completed/controller.js should pass jscs', function () {
    ok(true, 'imaging/completed/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/imaging/completed/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - imaging/completed');
  test('imaging/completed/route.js should pass jscs', function () {
    ok(true, 'imaging/completed/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/imaging/delete/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - imaging/delete');
  test('imaging/delete/controller.js should pass jscs', function () {
    ok(true, 'imaging/delete/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/imaging/edit/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - imaging/edit');
  test('imaging/edit/controller.js should pass jscs', function () {
    ok(true, 'imaging/edit/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/imaging/edit/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - imaging/edit');
  test('imaging/edit/route.js should pass jscs', function () {
    ok(true, 'imaging/edit/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/imaging/index/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - imaging/index');
  test('imaging/index/controller.js should pass jscs', function () {
    ok(true, 'imaging/index/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/imaging/index/imaging-edit-button/component.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - imaging/index/imaging-edit-button');
  test('imaging/index/imaging-edit-button/component.js should pass jscs', function () {
    ok(true, 'imaging/index/imaging-edit-button/component.js should pass jscs.');
  });
});
define('hospitalrun/tests/imaging/index/requested-list-item/component.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - imaging/index/requested-list-item');
  test('imaging/index/requested-list-item/component.js should pass jscs', function () {
    ok(true, 'imaging/index/requested-list-item/component.js should pass jscs.');
  });
});
define('hospitalrun/tests/imaging/index/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - imaging/index');
  test('imaging/index/route.js should pass jscs', function () {
    ok(true, 'imaging/index/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/imaging/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - imaging');
  test('imaging/route.js should pass jscs', function () {
    ok(true, 'imaging/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/initializers/i18n.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - initializers');
  test('initializers/i18n.js should pass jscs', function () {
    ok(true, 'initializers/i18n.js should pass jscs.');
  });
});
define('hospitalrun/tests/integration/components/inventory/rank-select-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('inventory/rank-select', 'Integration | Component | inventory/rank select', {
    integration: true
  });

  (0, _emberQunit.test)('it renders correctly', function (assert) {
    this.set('value', null);

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.4.6',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 4,
              'column': 4
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'inventory/rank-select', [], ['property', 'value', 'prompt', 'n/a'], ['loc', [null, [1, 0], [4, 4]]]]],
        locals: [],
        templates: []
      };
    })()));

    // options
    var $options = this.$('option');
    assert.equal($options.length, 4, 'Should render 4 options');
    assert.equal($options[0].value, 'null', 'First option value is null (prompt)');
    assert.equal($options[0].innerHTML.trim(), 'n/a', 'First option label is prompt');
    assert.equal($options[1].value, 'A', 'Second option is "A"');
    assert.equal($options[2].value, $options[2].innerHTML.trim(), 'Values are similar as labels');
  });
});
define('hospitalrun/tests/integration/components/inventory/rank-select-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - integration/components/inventory');
  test('integration/components/inventory/rank-select-test.js should pass jscs', function () {
    ok(true, 'integration/components/inventory/rank-select-test.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/adjust/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/adjust');
  test('inventory/adjust/controller.js should pass jscs', function () {
    ok(true, 'inventory/adjust/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/barcode/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/barcode');
  test('inventory/barcode/controller.js should pass jscs', function () {
    ok(true, 'inventory/barcode/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/barcode/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/barcode');
  test('inventory/barcode/route.js should pass jscs', function () {
    ok(true, 'inventory/barcode/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/batch/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/batch');
  test('inventory/batch/controller.js should pass jscs', function () {
    ok(true, 'inventory/batch/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/batch/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/batch');
  test('inventory/batch/route.js should pass jscs', function () {
    ok(true, 'inventory/batch/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/delete/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/delete');
  test('inventory/delete/controller.js should pass jscs', function () {
    ok(true, 'inventory/delete/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/edit/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/edit');
  test('inventory/edit/controller.js should pass jscs', function () {
    ok(true, 'inventory/edit/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/edit/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/edit');
  test('inventory/edit/route.js should pass jscs', function () {
    ok(true, 'inventory/edit/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/index/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/index');
  test('inventory/index/controller.js should pass jscs', function () {
    ok(true, 'inventory/index/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/index/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/index');
  test('inventory/index/route.js should pass jscs', function () {
    ok(true, 'inventory/index/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/listing/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/listing');
  test('inventory/listing/controller.js should pass jscs', function () {
    ok(true, 'inventory/listing/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/listing/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/listing');
  test('inventory/listing/route.js should pass jscs', function () {
    ok(true, 'inventory/listing/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/purchase/edit/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/purchase/edit');
  test('inventory/purchase/edit/controller.js should pass jscs', function () {
    ok(true, 'inventory/purchase/edit/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/quick-add/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/quick-add');
  test('inventory/quick-add/controller.js should pass jscs', function () {
    ok(true, 'inventory/quick-add/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/rank-select/component.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/rank-select');
  test('inventory/rank-select/component.js should pass jscs', function () {
    ok(true, 'inventory/rank-select/component.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/reports/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/reports');
  test('inventory/reports/controller.js should pass jscs', function () {
    ok(true, 'inventory/reports/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/reports/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/reports');
  test('inventory/reports/route.js should pass jscs', function () {
    ok(true, 'inventory/reports/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/request/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/request');
  test('inventory/request/controller.js should pass jscs', function () {
    ok(true, 'inventory/request/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/request/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/request');
  test('inventory/request/route.js should pass jscs', function () {
    ok(true, 'inventory/request/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory');
  test('inventory/route.js should pass jscs', function () {
    ok(true, 'inventory/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/search/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/search');
  test('inventory/search/controller.js should pass jscs', function () {
    ok(true, 'inventory/search/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/search/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/search');
  test('inventory/search/route.js should pass jscs', function () {
    ok(true, 'inventory/search/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/inventory/transfer/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - inventory/transfer');
  test('inventory/transfer/controller.js should pass jscs', function () {
    ok(true, 'inventory/transfer/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/invoices/add-line-item/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - invoices/add-line-item');
  test('invoices/add-line-item/controller.js should pass jscs', function () {
    ok(true, 'invoices/add-line-item/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/invoices/delete/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - invoices/delete');
  test('invoices/delete/controller.js should pass jscs', function () {
    ok(true, 'invoices/delete/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/invoices/edit/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - invoices/edit');
  test('invoices/edit/controller.js should pass jscs', function () {
    ok(true, 'invoices/edit/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/invoices/edit/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - invoices/edit');
  test('invoices/edit/route.js should pass jscs', function () {
    ok(true, 'invoices/edit/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/invoices/index/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - invoices/index');
  test('invoices/index/controller.js should pass jscs', function () {
    ok(true, 'invoices/index/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/invoices/index/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - invoices/index');
  test('invoices/index/route.js should pass jscs', function () {
    ok(true, 'invoices/index/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/invoices/payment/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - invoices/payment');
  test('invoices/payment/controller.js should pass jscs', function () {
    ok(true, 'invoices/payment/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/invoices/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - invoices');
  test('invoices/route.js should pass jscs', function () {
    ok(true, 'invoices/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/invoices/search/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - invoices/search');
  test('invoices/search/route.js should pass jscs', function () {
    ok(true, 'invoices/search/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/labs/charge/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - labs/charge');
  test('labs/charge/controller.js should pass jscs', function () {
    ok(true, 'labs/charge/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/labs/completed/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - labs/completed');
  test('labs/completed/controller.js should pass jscs', function () {
    ok(true, 'labs/completed/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/labs/completed/labs-completed-list-item/component.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - labs/completed/labs-completed-list-item');
  test('labs/completed/labs-completed-list-item/component.js should pass jscs', function () {
    ok(true, 'labs/completed/labs-completed-list-item/component.js should pass jscs.');
  });
});
define('hospitalrun/tests/labs/completed/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - labs/completed');
  test('labs/completed/route.js should pass jscs', function () {
    ok(true, 'labs/completed/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/labs/delete/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - labs/delete');
  test('labs/delete/controller.js should pass jscs', function () {
    ok(true, 'labs/delete/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/labs/edit/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - labs/edit');
  test('labs/edit/controller.js should pass jscs', function () {
    ok(true, 'labs/edit/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/labs/edit/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - labs/edit');
  test('labs/edit/route.js should pass jscs', function () {
    ok(true, 'labs/edit/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/labs/index/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - labs/index');
  test('labs/index/controller.js should pass jscs', function () {
    ok(true, 'labs/index/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/labs/index/labs-edit-button/component.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - labs/index/labs-edit-button');
  test('labs/index/labs-edit-button/component.js should pass jscs', function () {
    ok(true, 'labs/index/labs-edit-button/component.js should pass jscs.');
  });
});
define('hospitalrun/tests/labs/index/labs-list-item/component.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - labs/index/labs-list-item');
  test('labs/index/labs-list-item/component.js should pass jscs', function () {
    ok(true, 'labs/index/labs-list-item/component.js should pass jscs.');
  });
});
define('hospitalrun/tests/labs/index/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - labs/index');
  test('labs/index/route.js should pass jscs', function () {
    ok(true, 'labs/index/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/labs/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - labs');
  test('labs/route.js should pass jscs', function () {
    ok(true, 'labs/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/locales/de/translations.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/de');
  test('locales/de/translations.js should pass jscs', function () {
    ok(true, 'locales/de/translations.js should pass jscs.');
  });
});
define('hospitalrun/tests/locales/en/config.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/en');
  test('locales/en/config.js should pass jscs', function () {
    ok(true, 'locales/en/config.js should pass jscs.');
  });
});
define('hospitalrun/tests/locales/en/translations.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/en');
  test('locales/en/translations.js should pass jscs', function () {
    ok(true, 'locales/en/translations.js should pass jscs.');
  });
});
define('hospitalrun/tests/locales/es/translations.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/es');
  test('locales/es/translations.js should pass jscs', function () {
    ok(true, 'locales/es/translations.js should pass jscs.');
  });
});
define('hospitalrun/tests/locales/es-CO/translations.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/es-CO');
  test('locales/es-CO/translations.js should pass jscs', function () {
    ok(true, 'locales/es-CO/translations.js should pass jscs.');
  });
});
define('hospitalrun/tests/locales/fr/translations.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/fr');
  test('locales/fr/translations.js should pass jscs', function () {
    ok(true, 'locales/fr/translations.js should pass jscs.');
  });
});
define('hospitalrun/tests/locales/pt-BR/translations.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/pt-BR');
  test('locales/pt-BR/translations.js should pass jscs', function () {
    ok(true, 'locales/pt-BR/translations.js should pass jscs.');
  });
});
define('hospitalrun/tests/locales/ru/translations.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/ru');
  test('locales/ru/translations.js should pass jscs', function () {
    ok(true, 'locales/ru/translations.js should pass jscs.');
  });
});
define('hospitalrun/tests/locales/tr/translations.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - locales/tr');
  test('locales/tr/translations.js should pass jscs', function () {
    ok(true, 'locales/tr/translations.js should pass jscs.');
  });
});
define('hospitalrun/tests/medication/completed/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - medication/completed');
  test('medication/completed/controller.js should pass jscs', function () {
    ok(true, 'medication/completed/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/medication/completed/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - medication/completed');
  test('medication/completed/route.js should pass jscs', function () {
    ok(true, 'medication/completed/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/medication/delete/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - medication/delete');
  test('medication/delete/controller.js should pass jscs', function () {
    ok(true, 'medication/delete/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/medication/edit/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - medication/edit');
  test('medication/edit/controller.js should pass jscs', function () {
    ok(true, 'medication/edit/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/medication/edit/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - medication/edit');
  test('medication/edit/route.js should pass jscs', function () {
    ok(true, 'medication/edit/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/medication/index/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - medication/index');
  test('medication/index/controller.js should pass jscs', function () {
    ok(true, 'medication/index/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/medication/index/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - medication/index');
  test('medication/index/route.js should pass jscs', function () {
    ok(true, 'medication/index/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/medication/return/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - medication/return');
  test('medication/return/controller.js should pass jscs', function () {
    ok(true, 'medication/return/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/medication/return/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - medication/return');
  test('medication/return/route.js should pass jscs', function () {
    ok(true, 'medication/return/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/medication/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - medication');
  test('medication/route.js should pass jscs', function () {
    ok(true, 'medication/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/medication/search/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - medication/search');
  test('medication/search/route.js should pass jscs', function () {
    ok(true, 'medication/search/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/appointment-statuses.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/appointment-statuses.js should pass jscs', function () {
    ok(true, 'mixins/appointment-statuses.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/billing-categories.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/billing-categories.js should pass jscs', function () {
    ok(true, 'mixins/billing-categories.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/blood-types.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/blood-types.js should pass jscs', function () {
    ok(true, 'mixins/blood-types.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/can-edit-requested.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/can-edit-requested.js should pass jscs', function () {
    ok(true, 'mixins/can-edit-requested.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/charge-actions.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/charge-actions.js should pass jscs', function () {
    ok(true, 'mixins/charge-actions.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/charge-route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/charge-route.js should pass jscs', function () {
    ok(true, 'mixins/charge-route.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/date-format.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/date-format.js should pass jscs', function () {
    ok(true, 'mixins/date-format.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/dob-days.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/dob-days.js should pass jscs', function () {
    ok(true, 'mixins/dob-days.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/edit-panel-props.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/edit-panel-props.js should pass jscs', function () {
    ok(true, 'mixins/edit-panel-props.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/fulfill-request.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/fulfill-request.js should pass jscs', function () {
    ok(true, 'mixins/fulfill-request.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/hospitalrun-version.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/hospitalrun-version.js should pass jscs', function () {
    ok(true, 'mixins/hospitalrun-version.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/imaging-pricing-types.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/imaging-pricing-types.js should pass jscs', function () {
    ok(true, 'mixins/imaging-pricing-types.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/inventory-adjustment-types.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/inventory-adjustment-types.js should pass jscs', function () {
    ok(true, 'mixins/inventory-adjustment-types.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/inventory-id.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/inventory-id.js should pass jscs', function () {
    ok(true, 'mixins/inventory-id.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/inventory-locations.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/inventory-locations.js should pass jscs', function () {
    ok(true, 'mixins/inventory-locations.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/inventory-selection.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/inventory-selection.js should pass jscs', function () {
    ok(true, 'mixins/inventory-selection.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/inventory-type-list.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/inventory-type-list.js should pass jscs', function () {
    ok(true, 'mixins/inventory-type-list.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/is-update-disabled.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/is-update-disabled.js should pass jscs', function () {
    ok(true, 'mixins/is-update-disabled.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/lab-pricing-types.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/lab-pricing-types.js should pass jscs', function () {
    ok(true, 'mixins/lab-pricing-types.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/location-name.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/location-name.js should pass jscs', function () {
    ok(true, 'mixins/location-name.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/medication-details.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/medication-details.js should pass jscs', function () {
    ok(true, 'mixins/medication-details.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/modal-helper.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/modal-helper.js should pass jscs', function () {
    ok(true, 'mixins/modal-helper.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/navigation.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/navigation.js should pass jscs', function () {
    ok(true, 'mixins/navigation.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/number-format.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/number-format.js should pass jscs', function () {
    ok(true, 'mixins/number-format.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/pagination-props.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/pagination-props.js should pass jscs', function () {
    ok(true, 'mixins/pagination-props.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/paging-actions.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/paging-actions.js should pass jscs', function () {
    ok(true, 'mixins/paging-actions.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/patient-diagnosis.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/patient-diagnosis.js should pass jscs', function () {
    ok(true, 'mixins/patient-diagnosis.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/patient-id.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/patient-id.js should pass jscs', function () {
    ok(true, 'mixins/patient-id.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/patient-list-route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/patient-list-route.js should pass jscs', function () {
    ok(true, 'mixins/patient-list-route.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/patient-name.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/patient-name.js should pass jscs', function () {
    ok(true, 'mixins/patient-name.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/patient-notes.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/patient-notes.js should pass jscs', function () {
    ok(true, 'mixins/patient-notes.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/patient-submodule.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/patient-submodule.js should pass jscs', function () {
    ok(true, 'mixins/patient-submodule.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/patient-visits.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/patient-visits.js should pass jscs', function () {
    ok(true, 'mixins/patient-visits.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/payment-profiles.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/payment-profiles.js should pass jscs', function () {
    ok(true, 'mixins/payment-profiles.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/pouch-adapter-utils.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/pouch-adapter-utils.js should pass jscs', function () {
    ok(true, 'mixins/pouch-adapter-utils.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/pouchdb.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/pouchdb.js should pass jscs', function () {
    ok(true, 'mixins/pouchdb.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/progress-dialog.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/progress-dialog.js should pass jscs', function () {
    ok(true, 'mixins/progress-dialog.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/publish-statuses.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/publish-statuses.js should pass jscs', function () {
    ok(true, 'mixins/publish-statuses.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/result-validation.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/result-validation.js should pass jscs', function () {
    ok(true, 'mixins/result-validation.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/return-to.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/return-to.js should pass jscs', function () {
    ok(true, 'mixins/return-to.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/setup-user-role.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/setup-user-role.js should pass jscs', function () {
    ok(true, 'mixins/setup-user-role.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/unit-types.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/unit-types.js should pass jscs', function () {
    ok(true, 'mixins/unit-types.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/user-roles.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/user-roles.js should pass jscs', function () {
    ok(true, 'mixins/user-roles.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/user-session.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/user-session.js should pass jscs', function () {
    ok(true, 'mixins/user-session.js should pass jscs.');
  });
});
define('hospitalrun/tests/mixins/visit-types.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - mixins');
  test('mixins/visit-types.js should pass jscs', function () {
    ok(true, 'mixins/visit-types.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/abstract.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/abstract.js should pass jscs', function () {
    ok(true, 'models/abstract.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/add-diagnosis.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/add-diagnosis.js should pass jscs', function () {
    ok(true, 'models/add-diagnosis.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/appointment.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/appointment.js should pass jscs', function () {
    ok(true, 'models/appointment.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/billing-line-item.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/billing-line-item.js should pass jscs', function () {
    ok(true, 'models/billing-line-item.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/family-info.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/family-info.js should pass jscs', function () {
    ok(true, 'models/family-info.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/imaging.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/imaging.js should pass jscs', function () {
    ok(true, 'models/imaging.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/inv-location.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/inv-location.js should pass jscs', function () {
    ok(true, 'models/inv-location.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/inv-purchase.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/inv-purchase.js should pass jscs', function () {
    ok(true, 'models/inv-purchase.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/inv-request.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/inv-request.js should pass jscs', function () {
    ok(true, 'models/inv-request.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/inventory-batch.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/inventory-batch.js should pass jscs', function () {
    ok(true, 'models/inventory-batch.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/inventory.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/inventory.js should pass jscs', function () {
    ok(true, 'models/inventory.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/invoice.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/invoice.js should pass jscs', function () {
    ok(true, 'models/invoice.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/lab.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/lab.js should pass jscs', function () {
    ok(true, 'models/lab.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/line-item-detail.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/line-item-detail.js should pass jscs', function () {
    ok(true, 'models/line-item-detail.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/lookup.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/lookup.js should pass jscs', function () {
    ok(true, 'models/lookup.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/medication.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/medication.js should pass jscs', function () {
    ok(true, 'models/medication.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/option.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/option.js should pass jscs', function () {
    ok(true, 'models/option.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/override-price.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/override-price.js should pass jscs', function () {
    ok(true, 'models/override-price.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/patient-note.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/patient-note.js should pass jscs', function () {
    ok(true, 'models/patient-note.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/patient.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/patient.js should pass jscs', function () {
    ok(true, 'models/patient.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/payment.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/payment.js should pass jscs', function () {
    ok(true, 'models/payment.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/photo.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/photo.js should pass jscs', function () {
    ok(true, 'models/photo.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/price-profile.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/price-profile.js should pass jscs', function () {
    ok(true, 'models/price-profile.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/pricing.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/pricing.js should pass jscs', function () {
    ok(true, 'models/pricing.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/proc-charge.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/proc-charge.js should pass jscs', function () {
    ok(true, 'models/proc-charge.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/procedure.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/procedure.js should pass jscs', function () {
    ok(true, 'models/procedure.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/sequence.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/sequence.js should pass jscs', function () {
    ok(true, 'models/sequence.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/social-expense.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/social-expense.js should pass jscs', function () {
    ok(true, 'models/social-expense.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/user-role.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/user-role.js should pass jscs', function () {
    ok(true, 'models/user-role.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/user.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/user.js should pass jscs', function () {
    ok(true, 'models/user.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/visit.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/visit.js should pass jscs', function () {
    ok(true, 'models/visit.js should pass jscs.');
  });
});
define('hospitalrun/tests/models/vital.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - models');
  test('models/vital.js should pass jscs', function () {
    ok(true, 'models/vital.js should pass jscs.');
  });
});
define('hospitalrun/tests/patients/add-contact/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - patients/add-contact');
  test('patients/add-contact/controller.js should pass jscs', function () {
    ok(true, 'patients/add-contact/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/patients/admitted/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - patients/admitted');
  test('patients/admitted/controller.js should pass jscs', function () {
    ok(true, 'patients/admitted/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/patients/admitted/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - patients/admitted');
  test('patients/admitted/route.js should pass jscs', function () {
    ok(true, 'patients/admitted/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/patients/delete/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - patients/delete');
  test('patients/delete/controller.js should pass jscs', function () {
    ok(true, 'patients/delete/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/patients/edit/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - patients/edit');
  test('patients/edit/controller.js should pass jscs', function () {
    ok(true, 'patients/edit/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/patients/edit/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - patients/edit');
  test('patients/edit/route.js should pass jscs', function () {
    ok(true, 'patients/edit/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/patients/index/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - patients/index');
  test('patients/index/controller.js should pass jscs', function () {
    ok(true, 'patients/index/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/patients/index/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - patients/index');
  test('patients/index/route.js should pass jscs', function () {
    ok(true, 'patients/index/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/patients/notes/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - patients/notes');
  test('patients/notes/controller.js should pass jscs', function () {
    ok(true, 'patients/notes/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/patients/photo/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - patients/photo');
  test('patients/photo/controller.js should pass jscs', function () {
    ok(true, 'patients/photo/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/patients/quick-add/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - patients/quick-add');
  test('patients/quick-add/controller.js should pass jscs', function () {
    ok(true, 'patients/quick-add/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/patients/reports/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - patients/reports');
  test('patients/reports/controller.js should pass jscs', function () {
    ok(true, 'patients/reports/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/patients/reports/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - patients/reports');
  test('patients/reports/route.js should pass jscs', function () {
    ok(true, 'patients/reports/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/patients/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - patients');
  test('patients/route.js should pass jscs', function () {
    ok(true, 'patients/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/patients/search/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - patients/search');
  test('patients/search/controller.js should pass jscs', function () {
    ok(true, 'patients/search/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/patients/search/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - patients/search');
  test('patients/search/route.js should pass jscs', function () {
    ok(true, 'patients/search/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/patients/socialwork/expense/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - patients/socialwork/expense');
  test('patients/socialwork/expense/controller.js should pass jscs', function () {
    ok(true, 'patients/socialwork/expense/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/patients/socialwork/family-info/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - patients/socialwork/family-info');
  test('patients/socialwork/family-info/controller.js should pass jscs', function () {
    ok(true, 'patients/socialwork/family-info/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/pricing/delete/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - pricing/delete');
  test('pricing/delete/controller.js should pass jscs', function () {
    ok(true, 'pricing/delete/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/pricing/edit/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - pricing/edit');
  test('pricing/edit/controller.js should pass jscs', function () {
    ok(true, 'pricing/edit/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/pricing/edit/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - pricing/edit');
  test('pricing/edit/route.js should pass jscs', function () {
    ok(true, 'pricing/edit/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/pricing/imaging/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - pricing/imaging');
  test('pricing/imaging/controller.js should pass jscs', function () {
    ok(true, 'pricing/imaging/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/pricing/imaging/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - pricing/imaging');
  test('pricing/imaging/route.js should pass jscs', function () {
    ok(true, 'pricing/imaging/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/pricing/index/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - pricing/index');
  test('pricing/index/controller.js should pass jscs', function () {
    ok(true, 'pricing/index/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/pricing/index/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - pricing/index');
  test('pricing/index/route.js should pass jscs', function () {
    ok(true, 'pricing/index/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/pricing/lab/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - pricing/lab');
  test('pricing/lab/controller.js should pass jscs', function () {
    ok(true, 'pricing/lab/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/pricing/lab/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - pricing/lab');
  test('pricing/lab/route.js should pass jscs', function () {
    ok(true, 'pricing/lab/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/pricing/override/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - pricing/override');
  test('pricing/override/controller.js should pass jscs', function () {
    ok(true, 'pricing/override/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/pricing/procedure/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - pricing/procedure');
  test('pricing/procedure/controller.js should pass jscs', function () {
    ok(true, 'pricing/procedure/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/pricing/procedure/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - pricing/procedure');
  test('pricing/procedure/route.js should pass jscs', function () {
    ok(true, 'pricing/procedure/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/pricing/profiles/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - pricing/profiles');
  test('pricing/profiles/controller.js should pass jscs', function () {
    ok(true, 'pricing/profiles/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/pricing/profiles/edit/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - pricing/profiles/edit');
  test('pricing/profiles/edit/controller.js should pass jscs', function () {
    ok(true, 'pricing/profiles/edit/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/pricing/profiles/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - pricing/profiles');
  test('pricing/profiles/route.js should pass jscs', function () {
    ok(true, 'pricing/profiles/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/pricing/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - pricing');
  test('pricing/route.js should pass jscs', function () {
    ok(true, 'pricing/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/pricing/search/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - pricing/search');
  test('pricing/search/controller.js should pass jscs', function () {
    ok(true, 'pricing/search/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/pricing/search/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - pricing/search');
  test('pricing/search/route.js should pass jscs', function () {
    ok(true, 'pricing/search/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/pricing/ward/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - pricing/ward');
  test('pricing/ward/controller.js should pass jscs', function () {
    ok(true, 'pricing/ward/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/pricing/ward/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - pricing/ward');
  test('pricing/ward/route.js should pass jscs', function () {
    ok(true, 'pricing/ward/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/print/invoice/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - print/invoice');
  test('print/invoice/controller.js should pass jscs', function () {
    ok(true, 'print/invoice/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/procedures/charge/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - procedures/charge');
  test('procedures/charge/controller.js should pass jscs', function () {
    ok(true, 'procedures/charge/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/procedures/edit/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - procedures/edit');
  test('procedures/edit/controller.js should pass jscs', function () {
    ok(true, 'procedures/edit/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/procedures/edit/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - procedures/edit');
  test('procedures/edit/route.js should pass jscs', function () {
    ok(true, 'procedures/edit/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/procedures/medication/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - procedures/medication');
  test('procedures/medication/controller.js should pass jscs', function () {
    ok(true, 'procedures/medication/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/resolver.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - .');
  test('resolver.js should pass jscs', function () {
    ok(true, 'resolver.js should pass jscs.');
  });
});
define('hospitalrun/tests/router.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - .');
  test('router.js should pass jscs', function () {
    ok(true, 'router.js should pass jscs.');
  });
});
define('hospitalrun/tests/routes/abstract-edit-route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - routes');
  test('routes/abstract-edit-route.js should pass jscs', function () {
    ok(true, 'routes/abstract-edit-route.js should pass jscs.');
  });
});
define('hospitalrun/tests/routes/abstract-index-route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - routes');
  test('routes/abstract-index-route.js should pass jscs', function () {
    ok(true, 'routes/abstract-index-route.js should pass jscs.');
  });
});
define('hospitalrun/tests/routes/abstract-module-route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - routes');
  test('routes/abstract-module-route.js should pass jscs', function () {
    ok(true, 'routes/abstract-module-route.js should pass jscs.');
  });
});
define('hospitalrun/tests/routes/abstract-search-route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - routes');
  test('routes/abstract-search-route.js should pass jscs', function () {
    ok(true, 'routes/abstract-search-route.js should pass jscs.');
  });
});
define('hospitalrun/tests/routes/application.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - routes');
  test('routes/application.js should pass jscs', function () {
    ok(true, 'routes/application.js should pass jscs.');
  });
});
define('hospitalrun/tests/routes/index.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - routes');
  test('routes/index.js should pass jscs', function () {
    ok(true, 'routes/index.js should pass jscs.');
  });
});
define('hospitalrun/tests/routes/login.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - routes');
  test('routes/login.js should pass jscs', function () {
    ok(true, 'routes/login.js should pass jscs.');
  });
});
define('hospitalrun/tests/serializers/application.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - serializers');
  test('serializers/application.js should pass jscs', function () {
    ok(true, 'serializers/application.js should pass jscs.');
  });
});
define('hospitalrun/tests/serializers/user.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - serializers');
  test('serializers/user.js should pass jscs', function () {
    ok(true, 'serializers/user.js should pass jscs.');
  });
});
define('hospitalrun/tests/services/config.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - services');
  test('services/config.js should pass jscs', function () {
    ok(true, 'services/config.js should pass jscs.');
  });
});
define('hospitalrun/tests/services/database.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - services');
  test('services/database.js should pass jscs', function () {
    ok(true, 'services/database.js should pass jscs.');
  });
});
define('hospitalrun/tests/services/filesystem.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - services');
  test('services/filesystem.js should pass jscs', function () {
    ok(true, 'services/filesystem.js should pass jscs.');
  });
});
define('hospitalrun/tests/serviceworkers/pouchdb-sync.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - serviceworkers');
  test('serviceworkers/pouchdb-sync.js should pass jscs', function () {
    ok(true, 'serviceworkers/pouchdb-sync.js should pass jscs.');
  });
});
define("hospitalrun/tests/template-deprecations-test", ["exports"], function (exports) {
  "use strict";
});
define('hospitalrun/tests/test-helper', ['exports', 'hospitalrun/tests/helpers/resolver', 'ember-qunit'], function (exports, _hospitalrunTestsHelpersResolver, _emberQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_hospitalrunTestsHelpersResolver['default']);
});
define('hospitalrun/tests/test-helper.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - .');
  test('test-helper.js should pass jscs', function () {
    ok(true, 'test-helper.js should pass jscs.');
  });
});
define('hospitalrun/tests/unit/appointments/missed/route-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:appointments/missed', 'Unit | Route | appointments/missed', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('hospitalrun/tests/unit/appointments/missed/route-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/appointments/missed');
  test('unit/appointments/missed/route-test.js should pass jscs', function () {
    ok(true, 'unit/appointments/missed/route-test.js should pass jscs.');
  });
});
define('hospitalrun/tests/unit/components/nav-menu-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('nav-menu', 'NavMenuComponent', {
    unit: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    assert.expect(2);

    var startingMenu = {
      title: 'Inventory',
      iconClass: 'octicon-package',
      route: 'inventory',
      capability: 'inventory',
      subnav: [{
        title: 'Requests',
        iconClass: 'octicon-chevron-right',
        route: 'inventory.index',
        capability: 'add_inventory_request'
      }, {
        title: 'Items',
        iconClass: 'octicon-chevron-right',
        route: 'inventory.listing',
        capability: 'inventory'
      }]
    };

    // creates the component instance
    var navMenuProperties = { nav: startingMenu };
    var navMenu = this.subject(navMenuProperties);
    assert.equal(navMenu._state, 'preRender');

    // appends the navMenu to the page
    this.render();
    assert.equal(navMenu._state, 'inDOM');
  });
});
define('hospitalrun/tests/unit/components/nav-menu-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/components');
  test('unit/components/nav-menu-test.js should pass jscs', function () {
    ok(true, 'unit/components/nav-menu-test.js should pass jscs.');
  });
});
define('hospitalrun/tests/unit/models/inventory-test', ['exports', 'ember', 'ember-qunit'], function (exports, _ember, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('inventory', 'Unit | Model | inventory', {
    // Specify the other units that are required for this test.
    needs: ['ember-validations@validator:local/numericality', 'ember-validations@validator:local/presence', 'model:inv-location', 'model:inv-purchase', 'service:validations']
  });

  (0, _emberQunit.test)('condition', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model, 'Model exists');

    _ember['default'].run(function () {
      model.setProperties({
        estimatedDaysOfStock: 28,
        rank: 'A'
      });
    });
    assert.equal(model.get('condition'), 'good', 'Condition Should be good with given values');

    _ember['default'].run(function () {
      model.set('estimatedDaysOfStock', 15);
    });
    assert.equal(model.get('condition'), 'average', 'Condition Should be average with new quantity');

    _ember['default'].run(function () {
      model.set('rank', 'B');
    });
    assert.equal(model.get('condition'), 'good', 'Condition should be good again with new rank');

    _ember['default'].run(function () {
      model.set('estimatedDaysOfStock', 6);
    });
    assert.equal(model.get('condition'), 'bad', 'Condition should be bad with new quantity');

    _ember['default'].run(function () {
      model.set('rank', 'C');
    });
    assert.equal(model.get('condition'), 'average', 'Condition should be average again');
  });
});
define('hospitalrun/tests/unit/models/inventory-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/models');
  test('unit/models/inventory-test.js should pass jscs', function () {
    ok(true, 'unit/models/inventory-test.js should pass jscs.');
  });
});
define('hospitalrun/tests/unit/services/config-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:config', 'Unit | Service | config', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('hospitalrun/tests/unit/services/config-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/services');
  test('unit/services/config-test.js should pass jscs', function () {
    ok(true, 'unit/services/config-test.js should pass jscs.');
  });
});
define('hospitalrun/tests/unit/services/filesystem-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:filesystem', 'Unit | Service | filesystem', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('hospitalrun/tests/unit/services/filesystem-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/services');
  test('unit/services/filesystem-test.js should pass jscs', function () {
    ok(true, 'unit/services/filesystem-test.js should pass jscs.');
  });
});
define('hospitalrun/tests/unit/utils/item-condition-test', ['exports', 'hospitalrun/utils/item-condition', 'ember-qunit'], function (exports, _hospitalrunUtilsItemCondition, _emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('util:item-condition', 'Unit | Utils | item-condition');

  (0, _emberQunit.test)('rankToMultiplier', function (assert) {
    assert.equal((0, _hospitalrunUtilsItemCondition.rankToMultiplier)('A'), 0.5, 'Should be one half for A rank');
    assert.equal((0, _hospitalrunUtilsItemCondition.rankToMultiplier)('B'), 1, 'Should be one for B rank');
    assert.equal((0, _hospitalrunUtilsItemCondition.rankToMultiplier)('C'), 2, 'Should be two for C rank');
  });

  (0, _emberQunit.test)('getCondition', function (assert) {
    assert.equal((0, _hospitalrunUtilsItemCondition.getCondition)(14), 'good', 'Should be good for 14 days');
    assert.equal((0, _hospitalrunUtilsItemCondition.getCondition)(13), 'average', 'Should be average for 13 days');
    assert.equal((0, _hospitalrunUtilsItemCondition.getCondition)(6), 'bad', 'Should be bad for 6 days');
    assert.equal((0, _hospitalrunUtilsItemCondition.getCondition)(14, 0.5), 'average', 'Shold accept custom multiplier');
  });
});
define('hospitalrun/tests/unit/utils/item-condition-test.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - unit/utils');
  test('unit/utils/item-condition-test.js should pass jscs', function () {
    ok(true, 'unit/utils/item-condition-test.js should pass jscs.');
  });
});
define('hospitalrun/tests/users/delete/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - users/delete');
  test('users/delete/controller.js should pass jscs', function () {
    ok(true, 'users/delete/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/users/edit/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - users/edit');
  test('users/edit/controller.js should pass jscs', function () {
    ok(true, 'users/edit/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/users/edit/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - users/edit');
  test('users/edit/route.js should pass jscs', function () {
    ok(true, 'users/edit/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/users/index/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - users/index');
  test('users/index/controller.js should pass jscs', function () {
    ok(true, 'users/index/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/users/index/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - users/index');
  test('users/index/route.js should pass jscs', function () {
    ok(true, 'users/index/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/users/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - users');
  test('users/route.js should pass jscs', function () {
    ok(true, 'users/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/utils/date-sort.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - utils');
  test('utils/date-sort.js should pass jscs', function () {
    ok(true, 'utils/date-sort.js should pass jscs.');
  });
});
define('hospitalrun/tests/utils/email-validation.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - utils');
  test('utils/email-validation.js should pass jscs', function () {
    ok(true, 'utils/email-validation.js should pass jscs.');
  });
});
define('hospitalrun/tests/utils/item-condition.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - utils');
  test('utils/item-condition.js should pass jscs', function () {
    ok(true, 'utils/item-condition.js should pass jscs.');
  });
});
define('hospitalrun/tests/utils/patient-validation.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - utils');
  test('utils/patient-validation.js should pass jscs', function () {
    ok(true, 'utils/patient-validation.js should pass jscs.');
  });
});
define('hospitalrun/tests/utils/pouch-views.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - utils');
  test('utils/pouch-views.js should pass jscs', function () {
    ok(true, 'utils/pouch-views.js should pass jscs.');
  });
});
define('hospitalrun/tests/utils/select-values.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - utils');
  test('utils/select-values.js should pass jscs', function () {
    ok(true, 'utils/select-values.js should pass jscs.');
  });
});
define('hospitalrun/tests/visits/add-diagnosis/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - visits/add-diagnosis');
  test('visits/add-diagnosis/controller.js should pass jscs', function () {
    ok(true, 'visits/add-diagnosis/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/visits/charge/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - visits/charge');
  test('visits/charge/controller.js should pass jscs', function () {
    ok(true, 'visits/charge/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/visits/delete/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - visits/delete');
  test('visits/delete/controller.js should pass jscs', function () {
    ok(true, 'visits/delete/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/visits/edit/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - visits/edit');
  test('visits/edit/controller.js should pass jscs', function () {
    ok(true, 'visits/edit/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/visits/edit/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - visits/edit');
  test('visits/edit/route.js should pass jscs', function () {
    ok(true, 'visits/edit/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/visits/procedures/delete/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - visits/procedures/delete');
  test('visits/procedures/delete/controller.js should pass jscs', function () {
    ok(true, 'visits/procedures/delete/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/visits/route.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - visits');
  test('visits/route.js should pass jscs', function () {
    ok(true, 'visits/route.js should pass jscs.');
  });
});
define('hospitalrun/tests/visits/vitals/delete/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - visits/vitals/delete');
  test('visits/vitals/delete/controller.js should pass jscs', function () {
    ok(true, 'visits/vitals/delete/controller.js should pass jscs.');
  });
});
define('hospitalrun/tests/visits/vitals/edit/controller.jscs-test', ['exports'], function (exports) {
  'use strict';

  module('JSCS - visits/vitals/edit');
  test('visits/vitals/edit/controller.js should pass jscs', function () {
    ok(true, 'visits/vitals/edit/controller.js should pass jscs.');
  });
});
/* jshint ignore:start */

require('hospitalrun/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map