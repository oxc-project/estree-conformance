__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "constObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 24
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "one",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 55,
                      "end": 58
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 60,
                      "end": 61
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 55,
                    "end": 61
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "oneOctal",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 91,
                      "end": 99
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "0o1",
                      "start": 101,
                      "end": 104
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 91,
                    "end": 104
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "oneHex",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 140
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "0x1",
                      "start": 142,
                      "end": 145
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 134,
                    "end": 145
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pOne",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 174,
                      "end": 178
                    },
                    "value": {
                      "type": "UnaryExpression",
                      "operator": "+",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 181,
                        "end": 182
                      },
                      "prefix": true,
                      "start": 180,
                      "end": 182
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 174,
                    "end": 182
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mOne",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 211,
                      "end": 215
                    },
                    "value": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 218,
                        "end": 219
                      },
                      "prefix": true,
                      "start": 217,
                      "end": 219
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 211,
                    "end": 219
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 225,
                      "end": 230
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 233,
                          "end": 234
                        },
                        {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 237,
                            "end": 238
                          },
                          "prefix": true,
                          "start": 236,
                          "end": 238
                        },
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "1n",
                          "bigint": "1",
                          "start": 240,
                          "end": 242
                        },
                        {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Literal",
                            "value": null,
                            "raw": "1n",
                            "bigint": "1",
                            "start": 245,
                            "end": 247
                          },
                          "prefix": true,
                          "start": 244,
                          "end": 247
                        }
                      ],
                      "start": 232,
                      "end": 248
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 225,
                    "end": 248
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "onen",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 277,
                      "end": 281
                    },
                    "value": {
                      "type": "Literal",
                      "value": null,
                      "raw": "1n",
                      "bigint": "1",
                      "start": 283,
                      "end": 285
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 277,
                    "end": 285
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "mOnen",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 315,
                      "end": 320
                    },
                    "value": {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Literal",
                        "value": null,
                        "raw": "1n",
                        "bigint": "1",
                        "start": 323,
                        "end": 325
                      },
                      "prefix": true,
                      "start": 322,
                      "end": 325
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 315,
                    "end": 325
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "oneStrDoubleQuote",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 356,
                      "end": 373
                    },
                    "value": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 375,
                      "end": 378
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 356,
                    "end": 378
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "oneStrSingleQuote",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 408,
                      "end": 425
                    },
                    "value": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "'1'",
                      "start": 427,
                      "end": 430
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 408,
                    "end": 430
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "oneStrTemplate",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 460,
                      "end": 474
                    },
                    "value": {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "1",
                            "cooked": "1"
                          },
                          "tail": true,
                          "start": 476,
                          "end": 479
                        }
                      ],
                      "expressions": [],
                      "start": 476,
                      "end": 479
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 460,
                    "end": 479
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "method",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 505,
                      "end": 511
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 515,
                          "end": 519
                        },
                        "start": 513,
                        "end": 519
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 520,
                        "end": 528
                      },
                      "expression": false,
                      "start": 511,
                      "end": 528
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 505,
                    "end": 528
                  }
                ],
                "start": 27,
                "end": 531
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "const",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 535,
                  "end": 540
                },
                "typeArguments": null,
                "start": 535,
                "end": 540
              },
              "start": 27,
              "end": 540
            },
            "definite": false,
            "start": 13,
            "end": 540
          }
        ],
        "declare": false,
        "start": 7,
        "end": 541
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 541
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null,
              "start": 556,
              "end": 559
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 562,
              "end": 563
            },
            "definite": false,
            "start": 556,
            "end": 563
          }
        ],
        "declare": false,
        "start": 550,
        "end": 564
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 543,
      "end": 564
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oneOctal",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 586
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "0o1",
              "start": 589,
              "end": 592
            },
            "definite": false,
            "start": 578,
            "end": 592
          }
        ],
        "declare": false,
        "start": 572,
        "end": 593
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 565,
      "end": 593
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oneHex",
              "optional": false,
              "typeAnnotation": null,
              "start": 607,
              "end": 613
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "0x1",
              "start": 616,
              "end": 619
            },
            "definite": false,
            "start": 607,
            "end": 619
          }
        ],
        "declare": false,
        "start": 601,
        "end": 620
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 594,
      "end": 620
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "pOne",
              "optional": false,
              "typeAnnotation": null,
              "start": 634,
              "end": 638
            },
            "init": {
              "type": "UnaryExpression",
              "operator": "+",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 642,
                "end": 643
              },
              "prefix": true,
              "start": 641,
              "end": 643
            },
            "definite": false,
            "start": 634,
            "end": 643
          }
        ],
        "declare": false,
        "start": 628,
        "end": 644
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 621,
      "end": 644
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mOne",
              "optional": false,
              "typeAnnotation": null,
              "start": 658,
              "end": 662
            },
            "init": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 666,
                "end": 667
              },
              "prefix": true,
              "start": 665,
              "end": 667
            },
            "definite": false,
            "start": 658,
            "end": 667
          }
        ],
        "declare": false,
        "start": 652,
        "end": 668
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 645,
      "end": 668
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "onen",
              "optional": false,
              "typeAnnotation": null,
              "start": 682,
              "end": 686
            },
            "init": {
              "type": "Literal",
              "value": null,
              "raw": "1n",
              "bigint": "1",
              "start": 689,
              "end": 691
            },
            "definite": false,
            "start": 682,
            "end": 691
          }
        ],
        "declare": false,
        "start": 676,
        "end": 692
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 669,
      "end": 692
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mOnen",
              "optional": false,
              "typeAnnotation": null,
              "start": 706,
              "end": 711
            },
            "init": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Literal",
                "value": null,
                "raw": "1n",
                "bigint": "1",
                "start": 715,
                "end": 717
              },
              "prefix": true,
              "start": 714,
              "end": 717
            },
            "definite": false,
            "start": 706,
            "end": 717
          }
        ],
        "declare": false,
        "start": 700,
        "end": 718
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 693,
      "end": 718
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oneStrDoubleQuote",
              "optional": false,
              "typeAnnotation": null,
              "start": 732,
              "end": 749
            },
            "init": {
              "type": "Literal",
              "value": "1",
              "raw": "\"1\"",
              "start": 752,
              "end": 755
            },
            "definite": false,
            "start": 732,
            "end": 755
          }
        ],
        "declare": false,
        "start": 726,
        "end": 756
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 719,
      "end": 756
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oneStrSingleQuote",
              "optional": false,
              "typeAnnotation": null,
              "start": 770,
              "end": 787
            },
            "init": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 790,
              "end": 793
            },
            "definite": false,
            "start": 770,
            "end": 793
          }
        ],
        "declare": false,
        "start": 764,
        "end": 794
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 757,
      "end": 794
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "oneStrTemplate",
              "optional": false,
              "typeAnnotation": null,
              "start": 808,
              "end": 822
            },
            "init": {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "1",
                    "cooked": "1"
                  },
                  "tail": true,
                  "start": 825,
                  "end": 828
                }
              ],
              "expressions": [],
              "start": 825,
              "end": 828
            },
            "definite": false,
            "start": 808,
            "end": 828
          }
        ],
        "declare": false,
        "start": 802,
        "end": 829
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 795,
      "end": 829
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mutableObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 844,
              "end": 857
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "one",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 888,
                    "end": 891
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 893,
                    "end": 894
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 888,
                  "end": 894
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "oneOctal",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 924,
                    "end": 932
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "0o1",
                    "start": 934,
                    "end": 937
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 924,
                  "end": 937
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "oneHex",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 967,
                    "end": 973
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "0x1",
                    "start": 975,
                    "end": 978
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 967,
                  "end": 978
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pOne",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1007,
                    "end": 1011
                  },
                  "value": {
                    "type": "UnaryExpression",
                    "operator": "+",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1014,
                      "end": 1015
                    },
                    "prefix": true,
                    "start": 1013,
                    "end": 1015
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1007,
                  "end": 1015
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mOne",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1044,
                    "end": 1048
                  },
                  "value": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1051,
                      "end": 1052
                    },
                    "prefix": true,
                    "start": 1050,
                    "end": 1052
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1044,
                  "end": 1052
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "onen",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1081,
                    "end": 1085
                  },
                  "value": {
                    "type": "Literal",
                    "value": null,
                    "raw": "1n",
                    "bigint": "1",
                    "start": 1087,
                    "end": 1089
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1081,
                  "end": 1089
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mOnen",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1119,
                    "end": 1124
                  },
                  "value": {
                    "type": "UnaryExpression",
                    "operator": "-",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "1n",
                      "bigint": "1",
                      "start": 1127,
                      "end": 1129
                    },
                    "prefix": true,
                    "start": 1126,
                    "end": 1129
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1119,
                  "end": 1129
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1155,
                    "end": 1161
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1165,
                        "end": 1169
                      },
                      "start": 1163,
                      "end": 1169
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1170,
                      "end": 1178
                    },
                    "expression": false,
                    "start": 1161,
                    "end": 1178
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1155,
                  "end": 1178
                }
              ],
              "start": 860,
              "end": 1181
            },
            "definite": false,
            "start": 844,
            "end": 1181
          }
        ],
        "declare": false,
        "start": 838,
        "end": 1182
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 831,
      "end": 1182
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1184
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "constObject",
    "start": 13,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 58,
    "end": 59
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "oneOctal",
    "start": 91,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Numeric",
    "value": "0o1",
    "start": 101,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "oneHex",
    "start": 134,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Numeric",
    "value": "0x1",
    "start": 142,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "pOne",
    "start": 174,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 180,
    "end": 181
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "mOne",
    "start": 211,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 217,
    "end": 218
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 225,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 232,
    "end": 233
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 234,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 236,
    "end": 237
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 238,
    "end": 239
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 240,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 244,
    "end": 245
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 245,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "onen",
    "start": 277,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 281,
    "end": 282
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 283,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 285,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "mOnen",
    "start": 315,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 322,
    "end": 323
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 323,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "oneStrDoubleQuote",
    "start": 356,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 375,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "oneStrSingleQuote",
    "start": 408,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 425,
    "end": 426
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 427,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 430,
    "end": 431
  },
  {
    "type": "Identifier",
    "value": "oneStrTemplate",
    "start": 460,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 474,
    "end": 475
  },
  {
    "type": "Template",
    "value": "`1`",
    "start": 476,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 505,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 513,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 515,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 532,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 535,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 543,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 550,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 556,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 560,
    "end": 561
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 563,
    "end": 564
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 565,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 572,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "oneOctal",
    "start": 578,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 587,
    "end": 588
  },
  {
    "type": "Numeric",
    "value": "0o1",
    "start": 589,
    "end": 592
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 592,
    "end": 593
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 594,
    "end": 600
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 601,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "oneHex",
    "start": 607,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 614,
    "end": 615
  },
  {
    "type": "Numeric",
    "value": "0x1",
    "start": 616,
    "end": 619
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 619,
    "end": 620
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 621,
    "end": 627
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 628,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "pOne",
    "start": 634,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 639,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 641,
    "end": 642
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Keyword",
    "value": "export",
    "start": 645,
    "end": 651
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 652,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "mOne",
    "start": 658,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 663,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 665,
    "end": 666
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 666,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 667,
    "end": 668
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 669,
    "end": 675
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 676,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "onen",
    "start": 682,
    "end": 686
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 687,
    "end": 688
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 689,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 691,
    "end": 692
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 693,
    "end": 699
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 700,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "mOnen",
    "start": 706,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 714,
    "end": 715
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 715,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 717,
    "end": 718
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 719,
    "end": 725
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 726,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "oneStrDoubleQuote",
    "start": 732,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 750,
    "end": 751
  },
  {
    "type": "String",
    "value": "\"1\"",
    "start": 752,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 755,
    "end": 756
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 757,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 764,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "oneStrSingleQuote",
    "start": 770,
    "end": 787
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 788,
    "end": 789
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 790,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 793,
    "end": 794
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 795,
    "end": 801
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 802,
    "end": 807
  },
  {
    "type": "Identifier",
    "value": "oneStrTemplate",
    "start": 808,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 823,
    "end": 824
  },
  {
    "type": "Template",
    "value": "`1`",
    "start": 825,
    "end": 828
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 828,
    "end": 829
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 831,
    "end": 837
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 838,
    "end": 843
  },
  {
    "type": "Identifier",
    "value": "mutableObject",
    "start": 844,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 860,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 888,
    "end": 891
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 891,
    "end": 892
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "oneOctal",
    "start": 924,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 932,
    "end": 933
  },
  {
    "type": "Numeric",
    "value": "0o1",
    "start": 934,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "oneHex",
    "start": 967,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 973,
    "end": 974
  },
  {
    "type": "Numeric",
    "value": "0x1",
    "start": 975,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 978,
    "end": 979
  },
  {
    "type": "Identifier",
    "value": "pOne",
    "start": 1007,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1011,
    "end": 1012
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1014,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Identifier",
    "value": "mOne",
    "start": 1044,
    "end": 1048
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "onen",
    "start": 1081,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 1087,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Identifier",
    "value": "mOnen",
    "start": 1119,
    "end": 1124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1124,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Numeric",
    "value": "1n",
    "start": 1127,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1155,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1163,
    "end": 1164
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1165,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1170,
    "end": 1171
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1181,
    "end": 1182
  }
]
```
