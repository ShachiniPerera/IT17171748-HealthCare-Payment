$(document).ready(function()
{
	if ($("#alertSuccess").text().trim() == "")
	{
		$("#alertSuccess").hide();
	}
	
	$("#alertError").hide();
});

//SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	
	// Form validation-------------------
	var status = validateDoctorPaymentForm();
	
	if (status != true)
	{
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	
	// If valid------------------------
	var method = ($("#hidPaymentIDSave").val() == "") ? "POST" : "PUT";
	
	$.ajax(
	{
		url : "DoctorPaymentAPI",
		type : method,
		data : $("#formDoctorPayment").serialize(),
		dataType : "text",
		complete : function(response, status)
		{
			onDoctorPaymentSaveComplete(response.responseText, status);
		}
	});
});

//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{
	$("#hidPaymentIDSave").val($(this).closest("tr").find('#hidPaymentIDUpdate').val());
	$("#Paymentcode").val($(this).closest("tr").find('td:eq(0)').text());
	$("#DocID").val($(this).closest("tr").find('td:eq(1)').text());
	$("#DocName").val($(this).closest("tr").find('td:eq(2)').text());
	$("#PaymentType").val($(this).closest("tr").find('td:eq(3)').text());
	$("#Amount").val($(this).closest("tr").find('td:eq(4)').text());
	$("#DateOfPayed").val($(this).closest("tr").find('td:eq(5)').text());
});

function onDoctorPaymentSaveComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divDoctorPaymentGrid").html(resultSet.data);
		} 
		else if (resultSet.status.trim() == "error")
		{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} 
	else if (status == "error")
	{
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} 
	else
	{
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	
	$("#hidPaymentIDSave").val("");
	$("#formDoctorPayment")[0].reset();
}

$(document).on("click", ".btnRemove", function(event)
{
	$.ajax(
	{
		url : "DoctorPaymentAPI",
		type : "DELETE",
		data : "PaymentID=" + $(this).data("paymentid"),
		dataType : "text",
		complete : function(response, status)
		{
			onDoctorPaymentDeleteComplete(response.responseText, status);
		}
	});
});

function onDoctorPaymentDeleteComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divDoctorPaymentGrid").html(resultSet.data);
		} 
		else if (resultSet.status.trim() == "error")
		{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} 
	else if (status == "error")
	{
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} 
	else
	{
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}


function validateDoctorPaymentForm()
{
	// Paymentcode
	if ($("#Paymentcode").val().trim() == "")
	{
		return "Insert Paymentcode.";
	}
	
	// DocID
	if ($("#DocID").val().trim() == "")
	{
		return "Insert DocID.";
	}
	
	//DocName-------------------------------
	if ($("#DocName").val().trim() == "")
	{
		return "Insert DocName.";
	}
	
	//PaymentType-------------------------------
	if ($("#PaymentType").val().trim() == "")
	{
		return "Insert PaymentType.";
	}
	
	// is numerical value
	var tmpAmount = $("#Amount").val().trim();
	
	if (!$.isNumeric(tmpAmount))
	{
		return "Insert a numerical value for Amount.";
	}
	
	// convert to decimal price
	$("#Amount").val(parseFloat(tmpAmount).toFixed(2));
	
	// DateOfPayed------------------------
	if ($("#DateOfPayed").val().trim() == "")
	{
		return "Insert DateOfPayed.";
	}
	
	return true;
}