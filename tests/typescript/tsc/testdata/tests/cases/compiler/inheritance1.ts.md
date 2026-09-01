__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 13
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 33
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 35,
                "end": 38
              },
              "start": 33,
              "end": 38
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 20,
            "end": 39
          }
        ],
        "start": 14,
        "end": 41
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SelectableControl",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 69
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Control",
            "optional": false,
            "typeAnnotation": null,
            "start": 78,
            "end": 85
          },
          "typeArguments": null,
          "start": 78,
          "end": 85
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 98
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 102,
                "end": 106
              },
              "start": 100,
              "end": 106
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 92,
            "end": 107
          }
        ],
        "start": 86,
        "end": 109
      },
      "declare": false,
      "start": 42,
      "end": 109
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Button",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 123
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 139
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "SelectableControl",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 168
          },
          "typeArguments": null,
          "start": 151,
          "end": 168
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null,
              "start": 175,
              "end": 181
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 184,
                "end": 187
              },
              "expression": false,
              "start": 181,
              "end": 187
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 175,
            "end": 187
          }
        ],
        "start": 169,
        "end": 189
      },
      "abstract": false,
      "declare": false,
      "start": 111,
      "end": 189
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TextBox",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 203
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null,
        "start": 212,
        "end": 219
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 232
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 235,
                "end": 238
              },
              "expression": false,
              "start": 232,
              "end": 238
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 226,
            "end": 238
          }
        ],
        "start": 220,
        "end": 240
      },
      "abstract": false,
      "declare": false,
      "start": 190,
      "end": 240
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ImageBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 247,
        "end": 256
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null,
        "start": 265,
        "end": 272
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "SelectableControl",
            "optional": false,
            "typeAnnotation": null,
            "start": 284,
            "end": 301
          },
          "typeArguments": null,
          "start": 284,
          "end": 301
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 301,
        "end": 304
      },
      "abstract": false,
      "declare": false,
      "start": 241,
      "end": 304
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Image1",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 317
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null,
        "start": 326,
        "end": 333
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 334,
        "end": 337
      },
      "abstract": false,
      "declare": false,
      "start": 305,
      "end": 337
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Locations",
        "optional": false,
        "typeAnnotation": null,
        "start": 344,
        "end": 353
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "SelectableControl",
            "optional": false,
            "typeAnnotation": null,
            "start": 365,
            "end": 382
          },
          "typeArguments": null,
          "start": 365,
          "end": 382
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 395
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 398,
                "end": 401
              },
              "expression": false,
              "start": 395,
              "end": 401
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 389,
            "end": 401
          }
        ],
        "start": 383,
        "end": 403
      },
      "abstract": false,
      "declare": false,
      "start": 338,
      "end": 403
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Locations1",
        "optional": false,
        "typeAnnotation": null,
        "start": 410,
        "end": 420
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "select",
              "optional": false,
              "typeAnnotation": null,
              "start": 427,
              "end": 433
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 436,
                "end": 439
              },
              "expression": false,
              "start": 433,
              "end": 439
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 427,
            "end": 439
          }
        ],
        "start": 421,
        "end": 441
      },
      "abstract": false,
      "declare": false,
      "start": 404,
      "end": 441
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "sc",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SelectableControl",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 458,
                  "end": 475
                },
                "typeArguments": null,
                "start": 458,
                "end": 475
              },
              "start": 456,
              "end": 475
            },
            "start": 454,
            "end": 475
          },
          "init": null,
          "definite": false,
          "start": 454,
          "end": 475
        }
      ],
      "declare": true,
      "start": 442,
      "end": 476
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Control",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 492,
                  "end": 499
                },
                "typeArguments": null,
                "start": 492,
                "end": 499
              },
              "start": 490,
              "end": 499
            },
            "start": 489,
            "end": 499
          },
          "init": null,
          "definite": false,
          "start": 489,
          "end": 499
        }
      ],
      "declare": true,
      "start": 477,
      "end": 500
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Button",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 517,
                  "end": 523
                },
                "typeArguments": null,
                "start": 517,
                "end": 523
              },
              "start": 515,
              "end": 523
            },
            "start": 514,
            "end": 523
          },
          "init": null,
          "definite": false,
          "start": 514,
          "end": 523
        }
      ],
      "declare": true,
      "start": 502,
      "end": 524
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 525,
          "end": 527
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 530,
          "end": 531
        },
        "start": 525,
        "end": 531
      },
      "directive": null,
      "start": 525,
      "end": 532
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 533,
          "end": 534
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 537,
          "end": 538
        },
        "start": 533,
        "end": 538
      },
      "directive": null,
      "start": 533,
      "end": 539
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 540,
          "end": 541
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 544,
          "end": 546
        },
        "start": 540,
        "end": 546
      },
      "directive": null,
      "start": 540,
      "end": 547
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 548,
          "end": 549
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 552,
          "end": 553
        },
        "start": 548,
        "end": 553
      },
      "directive": null,
      "start": 548,
      "end": 554
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TextBox",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 571,
                  "end": 578
                },
                "typeArguments": null,
                "start": 571,
                "end": 578
              },
              "start": 569,
              "end": 578
            },
            "start": 568,
            "end": 578
          },
          "init": null,
          "definite": false,
          "start": 568,
          "end": 578
        }
      ],
      "declare": true,
      "start": 556,
      "end": 579
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 580,
          "end": 582
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 585,
          "end": 586
        },
        "start": 580,
        "end": 586
      },
      "directive": null,
      "start": 580,
      "end": 587
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 588,
          "end": 589
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 592,
          "end": 593
        },
        "start": 588,
        "end": 593
      },
      "directive": null,
      "start": 588,
      "end": 594
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 595,
          "end": 596
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 599,
          "end": 601
        },
        "start": 595,
        "end": 601
      },
      "directive": null,
      "start": 595,
      "end": 602
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null,
          "start": 603,
          "end": 604
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 607,
          "end": 608
        },
        "start": 603,
        "end": 608
      },
      "directive": null,
      "start": 603,
      "end": 609
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ImageBase",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 626,
                  "end": 635
                },
                "typeArguments": null,
                "start": 626,
                "end": 635
              },
              "start": 624,
              "end": 635
            },
            "start": 623,
            "end": 635
          },
          "init": null,
          "definite": false,
          "start": 623,
          "end": 635
        }
      ],
      "declare": true,
      "start": 611,
      "end": 636
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 637,
          "end": 639
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 642,
          "end": 643
        },
        "start": 637,
        "end": 643
      },
      "directive": null,
      "start": 637,
      "end": 644
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 645,
          "end": 646
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 649,
          "end": 650
        },
        "start": 645,
        "end": 650
      },
      "directive": null,
      "start": 645,
      "end": 651
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 652,
          "end": 653
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 656,
          "end": 658
        },
        "start": 652,
        "end": 658
      },
      "directive": null,
      "start": 652,
      "end": 659
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 660,
          "end": 661
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 664,
          "end": 665
        },
        "start": 660,
        "end": 665
      },
      "directive": null,
      "start": 660,
      "end": 666
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Image1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 684,
                  "end": 690
                },
                "typeArguments": null,
                "start": 684,
                "end": 690
              },
              "start": 682,
              "end": 690
            },
            "start": 680,
            "end": 690
          },
          "init": null,
          "definite": false,
          "start": 680,
          "end": 690
        }
      ],
      "declare": true,
      "start": 668,
      "end": 691
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 692,
          "end": 694
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 697,
          "end": 699
        },
        "start": 692,
        "end": 699
      },
      "directive": null,
      "start": 692,
      "end": 700
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 701,
          "end": 702
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 705,
          "end": 707
        },
        "start": 701,
        "end": 707
      },
      "directive": null,
      "start": 701,
      "end": 708
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 709,
          "end": 711
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 714,
          "end": 716
        },
        "start": 709,
        "end": 716
      },
      "directive": null,
      "start": 709,
      "end": 717
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i1",
          "optional": false,
          "typeAnnotation": null,
          "start": 718,
          "end": 720
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 723,
          "end": 724
        },
        "start": 718,
        "end": 724
      },
      "directive": null,
      "start": 718,
      "end": 725
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "l",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Locations",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 742,
                  "end": 751
                },
                "typeArguments": null,
                "start": 742,
                "end": 751
              },
              "start": 740,
              "end": 751
            },
            "start": 739,
            "end": 751
          },
          "init": null,
          "definite": false,
          "start": 739,
          "end": 751
        }
      ],
      "declare": true,
      "start": 727,
      "end": 752
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 753,
          "end": 755
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null,
          "start": 758,
          "end": 759
        },
        "start": 753,
        "end": 759
      },
      "directive": null,
      "start": 753,
      "end": 760
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 761,
          "end": 762
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null,
          "start": 765,
          "end": 766
        },
        "start": 761,
        "end": 766
      },
      "directive": null,
      "start": 761,
      "end": 767
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null,
          "start": 768,
          "end": 769
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 772,
          "end": 774
        },
        "start": 768,
        "end": 774
      },
      "directive": null,
      "start": 768,
      "end": 775
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
          "optional": false,
          "typeAnnotation": null,
          "start": 776,
          "end": 777
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 780,
          "end": 781
        },
        "start": 776,
        "end": 781
      },
      "directive": null,
      "start": 776,
      "end": 782
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "l1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Locations1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 800,
                  "end": 810
                },
                "typeArguments": null,
                "start": 800,
                "end": 810
              },
              "start": 798,
              "end": 810
            },
            "start": 796,
            "end": 810
          },
          "init": null,
          "definite": false,
          "start": 796,
          "end": 810
        }
      ],
      "declare": true,
      "start": 784,
      "end": 811
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 812,
          "end": 814
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "l1",
          "optional": false,
          "typeAnnotation": null,
          "start": 817,
          "end": 819
        },
        "start": 812,
        "end": 819
      },
      "directive": null,
      "start": 812,
      "end": 820
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 821,
          "end": 822
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "l1",
          "optional": false,
          "typeAnnotation": null,
          "start": 825,
          "end": 827
        },
        "start": 821,
        "end": 827
      },
      "directive": null,
      "start": 821,
      "end": 828
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "l1",
          "optional": false,
          "typeAnnotation": null,
          "start": 829,
          "end": 831
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "sc",
          "optional": false,
          "typeAnnotation": null,
          "start": 834,
          "end": 836
        },
        "start": 829,
        "end": 836
      },
      "directive": null,
      "start": 829,
      "end": 837
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "l1",
          "optional": false,
          "typeAnnotation": null,
          "start": 838,
          "end": 840
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 843,
          "end": 844
        },
        "start": 838,
        "end": 844
      },
      "directive": null,
      "start": 838,
      "end": 845
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 845
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Control",
    "start": 6,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 20,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 28,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 42,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "SelectableControl",
    "start": 52,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 70,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "Control",
    "start": 78,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 92,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 102,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 111,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 117,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 124,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "Control",
    "start": 132,
    "end": 139
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 140,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "SelectableControl",
    "start": 151,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 175,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 190,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "TextBox",
    "start": 196,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 204,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "Control",
    "start": 212,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 239,
    "end": 240
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 241,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "ImageBase",
    "start": 247,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 257,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "Control",
    "start": 265,
    "end": 272
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 273,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "SelectableControl",
    "start": 284,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 305,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "Image1",
    "start": 311,
    "end": 317
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 318,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "Control",
    "start": 326,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 338,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "Locations",
    "start": 344,
    "end": 353
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 354,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "SelectableControl",
    "start": 365,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 389,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 402,
    "end": 403
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 404,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "Locations1",
    "start": 410,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "select",
    "start": 427,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 436,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 442,
    "end": 449
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 450,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 454,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 456,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "SelectableControl",
    "start": 458,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 477,
    "end": 484
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 485,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 489,
    "end": 490
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "Control",
    "start": 492,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 499,
    "end": 500
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 502,
    "end": 509
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 510,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 517,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 525,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 535,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 544,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 556,
    "end": 563
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 564,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "TextBox",
    "start": 571,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 578,
    "end": 579
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 580,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 588,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 592,
    "end": 593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 593,
    "end": 594
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 597,
    "end": 598
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 599,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 611,
    "end": 618
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 619,
    "end": 622
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 624,
    "end": 625
  },
  {
    "type": "Identifier",
    "value": "ImageBase",
    "start": 626,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 637,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 640,
    "end": 641
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 643,
    "end": 644
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 647,
    "end": 648
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 652,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 656,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 665,
    "end": 666
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 668,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 676,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 680,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "Image1",
    "start": 684,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 692,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 695,
    "end": 696
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 697,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 699,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 705,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 707,
    "end": 708
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 709,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 714,
    "end": 716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717
  },
  {
    "type": "Identifier",
    "value": "i1",
    "start": 718,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 721,
    "end": 722
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 723,
    "end": 724
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 727,
    "end": 734
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 735,
    "end": 738
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 740,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "Locations",
    "start": 742,
    "end": 751
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 751,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 753,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 761,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 766,
    "end": 767
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 768,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 770,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 772,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 776,
    "end": 777
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 778,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 784,
    "end": 791
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 792,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 796,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 798,
    "end": 799
  },
  {
    "type": "Identifier",
    "value": "Locations1",
    "start": 800,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 810,
    "end": 811
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 812,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 817,
    "end": 819
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 819,
    "end": 820
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 825,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 827,
    "end": 828
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 829,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "sc",
    "start": 834,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "l1",
    "start": 838,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 841,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 844,
    "end": 845
  }
]
```
