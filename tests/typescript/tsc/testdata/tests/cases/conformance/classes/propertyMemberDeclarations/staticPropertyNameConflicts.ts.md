__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "FunctionPropertyNames",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 27
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 36,
                    "end": 40
                  },
                  "value": {
                    "type": "Literal",
                    "value": "name",
                    "raw": "'name'",
                    "start": 42,
                    "end": 48
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 36,
                  "end": 48
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 54,
                    "end": 60
                  },
                  "value": {
                    "type": "Literal",
                    "value": "length",
                    "raw": "'length'",
                    "start": 62,
                    "end": 70
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 54,
                  "end": 70
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prototype",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 85
                  },
                  "value": {
                    "type": "Literal",
                    "value": "prototype",
                    "raw": "'prototype'",
                    "start": 87,
                    "end": 98
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 76,
                  "end": 98
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "caller",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 104,
                    "end": 110
                  },
                  "value": {
                    "type": "Literal",
                    "value": "caller",
                    "raw": "'caller'",
                    "start": 112,
                    "end": 120
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 104,
                  "end": 120
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 126,
                    "end": 135
                  },
                  "value": {
                    "type": "Literal",
                    "value": "arguments",
                    "raw": "'arguments'",
                    "start": 137,
                    "end": 148
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 126,
                  "end": 148
                }
              ],
              "start": 30,
              "end": 151
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 160
              },
              "typeArguments": null,
              "start": 155,
              "end": 160
            },
            "start": 30,
            "end": 160
          },
          "definite": false,
          "start": 6,
          "end": 160
        }
      ],
      "declare": false,
      "start": 0,
      "end": 161
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticName",
        "optional": false,
        "typeAnnotation": null,
        "start": 177,
        "end": 187
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 201,
              "end": 205
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 207,
                "end": 213
              },
              "start": 205,
              "end": 213
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 194,
            "end": 214
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 260,
              "end": 264
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 266,
                "end": 272
              },
              "start": 264,
              "end": 272
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 260,
            "end": 273
          }
        ],
        "start": 188,
        "end": 281
      },
      "abstract": false,
      "declare": false,
      "start": 171,
      "end": 281
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticName2",
        "optional": false,
        "typeAnnotation": null,
        "start": 289,
        "end": 300
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionPropertyNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 336
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 337,
                "end": 341
              },
              "optional": false,
              "computed": false,
              "start": 315,
              "end": 341
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 344,
                "end": 350
              },
              "start": 342,
              "end": 350
            },
            "value": null,
            "computed": true,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 307,
            "end": 351
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionPropertyNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 398,
                "end": 419
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 420,
                "end": 424
              },
              "optional": false,
              "computed": false,
              "start": 398,
              "end": 424
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 427,
                "end": 433
              },
              "start": 425,
              "end": 433
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 397,
            "end": 434
          }
        ],
        "start": 301,
        "end": 442
      },
      "abstract": false,
      "declare": false,
      "start": 283,
      "end": 442
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticNameFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 450,
        "end": 462
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 480
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
                "start": 483,
                "end": 485
              },
              "expression": false,
              "start": 480,
              "end": 485
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 469,
            "end": 485
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 531,
              "end": 535
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
                "start": 538,
                "end": 540
              },
              "expression": false,
              "start": 535,
              "end": 540
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 531,
            "end": 540
          }
        ],
        "start": 463,
        "end": 548
      },
      "abstract": false,
      "declare": false,
      "start": 444,
      "end": 548
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticNameFn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 556,
        "end": 569
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionPropertyNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 584,
                "end": 605
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 606,
                "end": 610
              },
              "optional": false,
              "computed": false,
              "start": 584,
              "end": 610
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
                "start": 614,
                "end": 616
              },
              "expression": false,
              "start": 611,
              "end": 616
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 576,
            "end": 616
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionPropertyNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 663,
                "end": 684
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 685,
                "end": 689
              },
              "optional": false,
              "computed": false,
              "start": 663,
              "end": 689
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
                "start": 693,
                "end": 695
              },
              "expression": false,
              "start": 690,
              "end": 695
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 662,
            "end": 695
          }
        ],
        "start": 570,
        "end": 703
      },
      "abstract": false,
      "declare": false,
      "start": 550,
      "end": 703
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticLength",
        "optional": false,
        "typeAnnotation": null,
        "start": 721,
        "end": 733
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
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 747,
              "end": 753
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 755,
                "end": 761
              },
              "start": 753,
              "end": 761
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 740,
            "end": 762
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 808,
              "end": 814
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 816,
                "end": 822
              },
              "start": 814,
              "end": 822
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 808,
            "end": 823
          }
        ],
        "start": 734,
        "end": 831
      },
      "abstract": false,
      "declare": false,
      "start": 715,
      "end": 831
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticLength2",
        "optional": false,
        "typeAnnotation": null,
        "start": 839,
        "end": 852
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionPropertyNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 867,
                "end": 888
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 889,
                "end": 895
              },
              "optional": false,
              "computed": false,
              "start": 867,
              "end": 895
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 898,
                "end": 904
              },
              "start": 896,
              "end": 904
            },
            "value": null,
            "computed": true,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 859,
            "end": 905
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionPropertyNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 952,
                "end": 973
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 974,
                "end": 980
              },
              "optional": false,
              "computed": false,
              "start": 952,
              "end": 980
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 983,
                "end": 989
              },
              "start": 981,
              "end": 989
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 951,
            "end": 990
          }
        ],
        "start": 853,
        "end": 998
      },
      "abstract": false,
      "declare": false,
      "start": 833,
      "end": 998
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticLengthFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 1006,
        "end": 1020
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
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 1034,
              "end": 1040
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
                "start": 1043,
                "end": 1045
              },
              "expression": false,
              "start": 1040,
              "end": 1045
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1027,
            "end": 1045
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 1091,
              "end": 1097
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
                "start": 1100,
                "end": 1102
              },
              "expression": false,
              "start": 1097,
              "end": 1102
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1091,
            "end": 1102
          }
        ],
        "start": 1021,
        "end": 1110
      },
      "abstract": false,
      "declare": false,
      "start": 1000,
      "end": 1110
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticLengthFn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1118,
        "end": 1133
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionPropertyNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 1148,
                "end": 1169
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 1170,
                "end": 1176
              },
              "optional": false,
              "computed": false,
              "start": 1148,
              "end": 1176
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
                "start": 1180,
                "end": 1182
              },
              "expression": false,
              "start": 1177,
              "end": 1182
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1140,
            "end": 1182
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionPropertyNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 1229,
                "end": 1250
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 1251,
                "end": 1257
              },
              "optional": false,
              "computed": false,
              "start": 1229,
              "end": 1257
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
                "start": 1261,
                "end": 1263
              },
              "expression": false,
              "start": 1258,
              "end": 1263
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1228,
            "end": 1263
          }
        ],
        "start": 1134,
        "end": 1271
      },
      "abstract": false,
      "declare": false,
      "start": 1112,
      "end": 1271
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticPrototype",
        "optional": false,
        "typeAnnotation": null,
        "start": 1292,
        "end": 1307
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
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 1321,
              "end": 1330
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1332,
                "end": 1338
              },
              "start": 1330,
              "end": 1338
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1314,
            "end": 1339
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 1363,
              "end": 1372
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1374,
                "end": 1380
              },
              "start": 1372,
              "end": 1380
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1363,
            "end": 1381
          }
        ],
        "start": 1308,
        "end": 1389
      },
      "abstract": false,
      "declare": false,
      "start": 1286,
      "end": 1389
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticPrototype2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1397,
        "end": 1413
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionPropertyNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 1428,
                "end": 1449
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null,
                "start": 1450,
                "end": 1459
              },
              "optional": false,
              "computed": false,
              "start": 1428,
              "end": 1459
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1462,
                "end": 1468
              },
              "start": 1460,
              "end": 1468
            },
            "value": null,
            "computed": true,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1420,
            "end": 1469
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionPropertyNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 1494,
                "end": 1515
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null,
                "start": 1516,
                "end": 1525
              },
              "optional": false,
              "computed": false,
              "start": 1494,
              "end": 1525
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1528,
                "end": 1534
              },
              "start": 1526,
              "end": 1534
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1493,
            "end": 1535
          }
        ],
        "start": 1414,
        "end": 1543
      },
      "abstract": false,
      "declare": false,
      "start": 1391,
      "end": 1543
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticPrototypeFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 1551,
        "end": 1568
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
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 1582,
              "end": 1591
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
                "start": 1594,
                "end": 1596
              },
              "expression": false,
              "start": 1591,
              "end": 1596
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1575,
            "end": 1596
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 1620,
              "end": 1629
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
                "start": 1632,
                "end": 1634
              },
              "expression": false,
              "start": 1629,
              "end": 1634
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1620,
            "end": 1634
          }
        ],
        "start": 1569,
        "end": 1642
      },
      "abstract": false,
      "declare": false,
      "start": 1545,
      "end": 1642
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticPrototypeFn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1650,
        "end": 1668
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionPropertyNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 1683,
                "end": 1704
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null,
                "start": 1705,
                "end": 1714
              },
              "optional": false,
              "computed": false,
              "start": 1683,
              "end": 1714
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
                "start": 1718,
                "end": 1720
              },
              "expression": false,
              "start": 1715,
              "end": 1720
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1675,
            "end": 1720
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionPropertyNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 1745,
                "end": 1766
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null,
                "start": 1767,
                "end": 1776
              },
              "optional": false,
              "computed": false,
              "start": 1745,
              "end": 1776
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
                "start": 1780,
                "end": 1782
              },
              "expression": false,
              "start": 1777,
              "end": 1782
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1744,
            "end": 1782
          }
        ],
        "start": 1669,
        "end": 1790
      },
      "abstract": false,
      "declare": false,
      "start": 1644,
      "end": 1790
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticCaller",
        "optional": false,
        "typeAnnotation": null,
        "start": 1808,
        "end": 1820
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
              "name": "caller",
              "optional": false,
              "typeAnnotation": null,
              "start": 1834,
              "end": 1840
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1842,
                "end": 1848
              },
              "start": 1840,
              "end": 1848
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1827,
            "end": 1849
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "caller",
              "optional": false,
              "typeAnnotation": null,
              "start": 1895,
              "end": 1901
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1903,
                "end": 1909
              },
              "start": 1901,
              "end": 1909
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1895,
            "end": 1910
          }
        ],
        "start": 1821,
        "end": 1918
      },
      "abstract": false,
      "declare": false,
      "start": 1802,
      "end": 1918
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticCaller2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1926,
        "end": 1939
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionPropertyNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 1954,
                "end": 1975
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "caller",
                "optional": false,
                "typeAnnotation": null,
                "start": 1976,
                "end": 1982
              },
              "optional": false,
              "computed": false,
              "start": 1954,
              "end": 1982
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1985,
                "end": 1991
              },
              "start": 1983,
              "end": 1991
            },
            "value": null,
            "computed": true,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 1946,
            "end": 1992
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionPropertyNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 2039,
                "end": 2060
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "caller",
                "optional": false,
                "typeAnnotation": null,
                "start": 2061,
                "end": 2067
              },
              "optional": false,
              "computed": false,
              "start": 2039,
              "end": 2067
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2070,
                "end": 2076
              },
              "start": 2068,
              "end": 2076
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2038,
            "end": 2077
          }
        ],
        "start": 1940,
        "end": 2085
      },
      "abstract": false,
      "declare": false,
      "start": 1920,
      "end": 2085
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticCallerFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 2093,
        "end": 2107
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
              "name": "caller",
              "optional": false,
              "typeAnnotation": null,
              "start": 2121,
              "end": 2127
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
                "start": 2130,
                "end": 2132
              },
              "expression": false,
              "start": 2127,
              "end": 2132
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2114,
            "end": 2132
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "caller",
              "optional": false,
              "typeAnnotation": null,
              "start": 2178,
              "end": 2184
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
                "start": 2187,
                "end": 2189
              },
              "expression": false,
              "start": 2184,
              "end": 2189
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2178,
            "end": 2189
          }
        ],
        "start": 2108,
        "end": 2197
      },
      "abstract": false,
      "declare": false,
      "start": 2087,
      "end": 2197
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticCallerFn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2205,
        "end": 2220
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionPropertyNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 2235,
                "end": 2256
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "caller",
                "optional": false,
                "typeAnnotation": null,
                "start": 2257,
                "end": 2263
              },
              "optional": false,
              "computed": false,
              "start": 2235,
              "end": 2263
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
                "start": 2267,
                "end": 2269
              },
              "expression": false,
              "start": 2264,
              "end": 2269
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2227,
            "end": 2269
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionPropertyNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 2316,
                "end": 2337
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "caller",
                "optional": false,
                "typeAnnotation": null,
                "start": 2338,
                "end": 2344
              },
              "optional": false,
              "computed": false,
              "start": 2316,
              "end": 2344
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
                "start": 2348,
                "end": 2350
              },
              "expression": false,
              "start": 2345,
              "end": 2350
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2315,
            "end": 2350
          }
        ],
        "start": 2221,
        "end": 2358
      },
      "abstract": false,
      "declare": false,
      "start": 2199,
      "end": 2358
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticArguments",
        "optional": false,
        "typeAnnotation": null,
        "start": 2379,
        "end": 2394
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
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null,
              "start": 2408,
              "end": 2417
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2419,
                "end": 2425
              },
              "start": 2417,
              "end": 2425
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2401,
            "end": 2426
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null,
              "start": 2472,
              "end": 2481
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2483,
                "end": 2489
              },
              "start": 2481,
              "end": 2489
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2472,
            "end": 2490
          }
        ],
        "start": 2395,
        "end": 2498
      },
      "abstract": false,
      "declare": false,
      "start": 2373,
      "end": 2498
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticArguments2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2506,
        "end": 2522
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionPropertyNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 2537,
                "end": 2558
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": null,
                "start": 2559,
                "end": 2568
              },
              "optional": false,
              "computed": false,
              "start": 2537,
              "end": 2568
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2571,
                "end": 2577
              },
              "start": 2569,
              "end": 2577
            },
            "value": null,
            "computed": true,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2529,
            "end": 2578
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionPropertyNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 2625,
                "end": 2646
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": null,
                "start": 2647,
                "end": 2656
              },
              "optional": false,
              "computed": false,
              "start": 2625,
              "end": 2656
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2659,
                "end": 2665
              },
              "start": 2657,
              "end": 2665
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 2624,
            "end": 2666
          }
        ],
        "start": 2523,
        "end": 2674
      },
      "abstract": false,
      "declare": false,
      "start": 2500,
      "end": 2674
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticArgumentsFn",
        "optional": false,
        "typeAnnotation": null,
        "start": 2682,
        "end": 2699
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
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null,
              "start": 2713,
              "end": 2722
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
                "start": 2725,
                "end": 2727
              },
              "expression": false,
              "start": 2722,
              "end": 2727
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2706,
            "end": 2727
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "arguments",
              "optional": false,
              "typeAnnotation": null,
              "start": 2773,
              "end": 2782
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
                "start": 2785,
                "end": 2787
              },
              "expression": false,
              "start": 2782,
              "end": 2787
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2773,
            "end": 2787
          }
        ],
        "start": 2700,
        "end": 2795
      },
      "abstract": false,
      "declare": false,
      "start": 2676,
      "end": 2795
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticArgumentsFn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 2803,
        "end": 2821
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
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionPropertyNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 2836,
                "end": 2857
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": null,
                "start": 2858,
                "end": 2867
              },
              "optional": false,
              "computed": false,
              "start": 2836,
              "end": 2867
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
                "start": 2871,
                "end": 2873
              },
              "expression": false,
              "start": 2868,
              "end": 2873
            },
            "kind": "method",
            "computed": true,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2828,
            "end": 2873
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "FunctionPropertyNames",
                "optional": false,
                "typeAnnotation": null,
                "start": 2920,
                "end": 2941
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "arguments",
                "optional": false,
                "typeAnnotation": null,
                "start": 2942,
                "end": 2951
              },
              "optional": false,
              "computed": false,
              "start": 2920,
              "end": 2951
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
                "start": 2955,
                "end": 2957
              },
              "expression": false,
              "start": 2952,
              "end": 2957
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2919,
            "end": 2957
          }
        ],
        "start": 2822,
        "end": 2965
      },
      "abstract": false,
      "declare": false,
      "start": 2797,
      "end": 2965
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
            "name": "StaticName_Anonymous",
            "optional": false,
            "typeAnnotation": null,
            "start": 3031,
            "end": 3051
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3073,
                    "end": 3077
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3079,
                      "end": 3085
                    },
                    "start": 3077,
                    "end": 3085
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 3066,
                  "end": 3086
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3132,
                    "end": 3136
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3138,
                      "end": 3144
                    },
                    "start": 3136,
                    "end": 3144
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 3132,
                  "end": 3145
                }
              ],
              "start": 3060,
              "end": 3153
            },
            "abstract": false,
            "declare": false,
            "start": 3054,
            "end": 3153
          },
          "definite": false,
          "start": 3031,
          "end": 3153
        }
      ],
      "declare": false,
      "start": 3027,
      "end": 3153
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
            "name": "StaticName_Anonymous2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3159,
            "end": 3180
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FunctionPropertyNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3203,
                      "end": 3224
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3225,
                      "end": 3229
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3203,
                    "end": 3229
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3232,
                      "end": 3238
                    },
                    "start": 3230,
                    "end": 3238
                  },
                  "value": null,
                  "computed": true,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 3195,
                  "end": 3239
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FunctionPropertyNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3286,
                      "end": 3307
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3308,
                      "end": 3312
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3286,
                    "end": 3312
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3315,
                      "end": 3321
                    },
                    "start": 3313,
                    "end": 3321
                  },
                  "value": null,
                  "computed": true,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 3285,
                  "end": 3322
                }
              ],
              "start": 3189,
              "end": 3330
            },
            "abstract": false,
            "declare": false,
            "start": 3183,
            "end": 3330
          },
          "definite": false,
          "start": 3159,
          "end": 3330
        }
      ],
      "declare": false,
      "start": 3155,
      "end": 3330
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
            "name": "StaticNameFn_Anonymous",
            "optional": false,
            "typeAnnotation": null,
            "start": 3336,
            "end": 3358
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3380,
                    "end": 3384
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
                      "start": 3387,
                      "end": 3389
                    },
                    "expression": false,
                    "start": 3384,
                    "end": 3389
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 3373,
                  "end": 3389
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3435,
                    "end": 3439
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
                      "start": 3442,
                      "end": 3444
                    },
                    "expression": false,
                    "start": 3439,
                    "end": 3444
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 3435,
                  "end": 3444
                }
              ],
              "start": 3367,
              "end": 3452
            },
            "abstract": false,
            "declare": false,
            "start": 3361,
            "end": 3452
          },
          "definite": false,
          "start": 3336,
          "end": 3452
        }
      ],
      "declare": false,
      "start": 3332,
      "end": 3452
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
            "name": "StaticNameFn_Anonymous2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3458,
            "end": 3481
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FunctionPropertyNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3504,
                      "end": 3525
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3526,
                      "end": 3530
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3504,
                    "end": 3530
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
                      "start": 3534,
                      "end": 3536
                    },
                    "expression": false,
                    "start": 3531,
                    "end": 3536
                  },
                  "kind": "method",
                  "computed": true,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 3496,
                  "end": 3536
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FunctionPropertyNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3583,
                      "end": 3604
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3605,
                      "end": 3609
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3583,
                    "end": 3609
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
                      "start": 3613,
                      "end": 3615
                    },
                    "expression": false,
                    "start": 3610,
                    "end": 3615
                  },
                  "kind": "method",
                  "computed": true,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 3582,
                  "end": 3615
                }
              ],
              "start": 3490,
              "end": 3623
            },
            "abstract": false,
            "declare": false,
            "start": 3484,
            "end": 3623
          },
          "definite": false,
          "start": 3458,
          "end": 3623
        }
      ],
      "declare": false,
      "start": 3454,
      "end": 3623
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
            "name": "StaticLength_Anonymous",
            "optional": false,
            "typeAnnotation": null,
            "start": 3639,
            "end": 3661
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3683,
                    "end": 3689
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3691,
                      "end": 3697
                    },
                    "start": 3689,
                    "end": 3697
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 3676,
                  "end": 3698
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3744,
                    "end": 3750
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3752,
                      "end": 3758
                    },
                    "start": 3750,
                    "end": 3758
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 3744,
                  "end": 3759
                }
              ],
              "start": 3670,
              "end": 3767
            },
            "abstract": false,
            "declare": false,
            "start": 3664,
            "end": 3767
          },
          "definite": false,
          "start": 3639,
          "end": 3767
        }
      ],
      "declare": false,
      "start": 3635,
      "end": 3767
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
            "name": "StaticLength_Anonymous2",
            "optional": false,
            "typeAnnotation": null,
            "start": 3773,
            "end": 3796
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FunctionPropertyNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3819,
                      "end": 3840
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3841,
                      "end": 3847
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3819,
                    "end": 3847
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3850,
                      "end": 3856
                    },
                    "start": 3848,
                    "end": 3856
                  },
                  "value": null,
                  "computed": true,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 3811,
                  "end": 3857
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FunctionPropertyNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3904,
                      "end": 3925
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3926,
                      "end": 3932
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3904,
                    "end": 3932
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3935,
                      "end": 3941
                    },
                    "start": 3933,
                    "end": 3941
                  },
                  "value": null,
                  "computed": true,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 3903,
                  "end": 3942
                }
              ],
              "start": 3805,
              "end": 3950
            },
            "abstract": false,
            "declare": false,
            "start": 3799,
            "end": 3950
          },
          "definite": false,
          "start": 3773,
          "end": 3950
        }
      ],
      "declare": false,
      "start": 3769,
      "end": 3950
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
            "name": "StaticLengthFn_Anonymous",
            "optional": false,
            "typeAnnotation": null,
            "start": 3956,
            "end": 3980
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4002,
                    "end": 4008
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
                      "start": 4011,
                      "end": 4013
                    },
                    "expression": false,
                    "start": 4008,
                    "end": 4013
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 3995,
                  "end": 4013
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4059,
                    "end": 4065
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
                      "start": 4068,
                      "end": 4070
                    },
                    "expression": false,
                    "start": 4065,
                    "end": 4070
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 4059,
                  "end": 4070
                }
              ],
              "start": 3989,
              "end": 4078
            },
            "abstract": false,
            "declare": false,
            "start": 3983,
            "end": 4078
          },
          "definite": false,
          "start": 3956,
          "end": 4078
        }
      ],
      "declare": false,
      "start": 3952,
      "end": 4078
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
            "name": "StaticLengthFn_Anonymous2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4084,
            "end": 4109
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FunctionPropertyNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4132,
                      "end": 4153
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4154,
                      "end": 4160
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4132,
                    "end": 4160
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
                      "start": 4164,
                      "end": 4166
                    },
                    "expression": false,
                    "start": 4161,
                    "end": 4166
                  },
                  "kind": "method",
                  "computed": true,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 4124,
                  "end": 4166
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FunctionPropertyNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4213,
                      "end": 4234
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4235,
                      "end": 4241
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4213,
                    "end": 4241
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
                      "start": 4245,
                      "end": 4247
                    },
                    "expression": false,
                    "start": 4242,
                    "end": 4247
                  },
                  "kind": "method",
                  "computed": true,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 4212,
                  "end": 4247
                }
              ],
              "start": 4118,
              "end": 4255
            },
            "abstract": false,
            "declare": false,
            "start": 4112,
            "end": 4255
          },
          "definite": false,
          "start": 4084,
          "end": 4255
        }
      ],
      "declare": false,
      "start": 4080,
      "end": 4255
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
            "name": "StaticPrototype_Anonymous",
            "optional": false,
            "typeAnnotation": null,
            "start": 4274,
            "end": 4299
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "name": "prototype",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4321,
                    "end": 4330
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4332,
                      "end": 4338
                    },
                    "start": 4330,
                    "end": 4338
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 4314,
                  "end": 4339
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prototype",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4363,
                    "end": 4372
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4374,
                      "end": 4380
                    },
                    "start": 4372,
                    "end": 4380
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 4363,
                  "end": 4381
                }
              ],
              "start": 4308,
              "end": 4389
            },
            "abstract": false,
            "declare": false,
            "start": 4302,
            "end": 4389
          },
          "definite": false,
          "start": 4274,
          "end": 4389
        }
      ],
      "declare": false,
      "start": 4270,
      "end": 4389
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
            "name": "StaticPrototype_Anonymous2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4395,
            "end": 4421
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FunctionPropertyNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4444,
                      "end": 4465
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prototype",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4466,
                      "end": 4475
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4444,
                    "end": 4475
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4478,
                      "end": 4484
                    },
                    "start": 4476,
                    "end": 4484
                  },
                  "value": null,
                  "computed": true,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 4436,
                  "end": 4485
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FunctionPropertyNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4510,
                      "end": 4531
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prototype",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4532,
                      "end": 4541
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4510,
                    "end": 4541
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4544,
                      "end": 4550
                    },
                    "start": 4542,
                    "end": 4550
                  },
                  "value": null,
                  "computed": true,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 4509,
                  "end": 4551
                }
              ],
              "start": 4430,
              "end": 4559
            },
            "abstract": false,
            "declare": false,
            "start": 4424,
            "end": 4559
          },
          "definite": false,
          "start": 4395,
          "end": 4559
        }
      ],
      "declare": false,
      "start": 4391,
      "end": 4559
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
            "name": "StaticPrototypeFn_Anonymous",
            "optional": false,
            "typeAnnotation": null,
            "start": 4565,
            "end": 4592
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "name": "prototype",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4614,
                    "end": 4623
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
                      "start": 4626,
                      "end": 4628
                    },
                    "expression": false,
                    "start": 4623,
                    "end": 4628
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 4607,
                  "end": 4628
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "prototype",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4652,
                    "end": 4661
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
                      "start": 4664,
                      "end": 4666
                    },
                    "expression": false,
                    "start": 4661,
                    "end": 4666
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 4652,
                  "end": 4666
                }
              ],
              "start": 4601,
              "end": 4674
            },
            "abstract": false,
            "declare": false,
            "start": 4595,
            "end": 4674
          },
          "definite": false,
          "start": 4565,
          "end": 4674
        }
      ],
      "declare": false,
      "start": 4561,
      "end": 4674
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
            "name": "StaticPrototypeFn_Anonymous2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4680,
            "end": 4708
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FunctionPropertyNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4731,
                      "end": 4752
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prototype",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4753,
                      "end": 4762
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4731,
                    "end": 4762
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
                      "start": 4766,
                      "end": 4768
                    },
                    "expression": false,
                    "start": 4763,
                    "end": 4768
                  },
                  "kind": "method",
                  "computed": true,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 4723,
                  "end": 4768
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FunctionPropertyNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4793,
                      "end": 4814
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prototype",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4815,
                      "end": 4824
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4793,
                    "end": 4824
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
                      "start": 4828,
                      "end": 4830
                    },
                    "expression": false,
                    "start": 4825,
                    "end": 4830
                  },
                  "kind": "method",
                  "computed": true,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 4792,
                  "end": 4830
                }
              ],
              "start": 4717,
              "end": 4838
            },
            "abstract": false,
            "declare": false,
            "start": 4711,
            "end": 4838
          },
          "definite": false,
          "start": 4680,
          "end": 4838
        }
      ],
      "declare": false,
      "start": 4676,
      "end": 4838
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
            "name": "StaticCaller_Anonymous",
            "optional": false,
            "typeAnnotation": null,
            "start": 4854,
            "end": 4876
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "name": "caller",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4898,
                    "end": 4904
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4906,
                      "end": 4912
                    },
                    "start": 4904,
                    "end": 4912
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 4891,
                  "end": 4913
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "caller",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4959,
                    "end": 4965
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4967,
                      "end": 4973
                    },
                    "start": 4965,
                    "end": 4973
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 4959,
                  "end": 4974
                }
              ],
              "start": 4885,
              "end": 4982
            },
            "abstract": false,
            "declare": false,
            "start": 4879,
            "end": 4982
          },
          "definite": false,
          "start": 4854,
          "end": 4982
        }
      ],
      "declare": false,
      "start": 4850,
      "end": 4982
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
            "name": "StaticCaller_Anonymous2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4988,
            "end": 5011
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FunctionPropertyNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5034,
                      "end": 5055
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "caller",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5056,
                      "end": 5062
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5034,
                    "end": 5062
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5065,
                      "end": 5071
                    },
                    "start": 5063,
                    "end": 5071
                  },
                  "value": null,
                  "computed": true,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 5026,
                  "end": 5072
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FunctionPropertyNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5119,
                      "end": 5140
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "caller",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5141,
                      "end": 5147
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5119,
                    "end": 5147
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 5150,
                      "end": 5156
                    },
                    "start": 5148,
                    "end": 5156
                  },
                  "value": null,
                  "computed": true,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 5118,
                  "end": 5157
                }
              ],
              "start": 5020,
              "end": 5165
            },
            "abstract": false,
            "declare": false,
            "start": 5014,
            "end": 5165
          },
          "definite": false,
          "start": 4988,
          "end": 5165
        }
      ],
      "declare": false,
      "start": 4984,
      "end": 5165
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
            "name": "StaticCallerFn_Anonymous",
            "optional": false,
            "typeAnnotation": null,
            "start": 5171,
            "end": 5195
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "name": "caller",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5217,
                    "end": 5223
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
                      "start": 5226,
                      "end": 5228
                    },
                    "expression": false,
                    "start": 5223,
                    "end": 5228
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 5210,
                  "end": 5228
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "caller",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5274,
                    "end": 5280
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
                      "start": 5283,
                      "end": 5285
                    },
                    "expression": false,
                    "start": 5280,
                    "end": 5285
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 5274,
                  "end": 5285
                }
              ],
              "start": 5204,
              "end": 5293
            },
            "abstract": false,
            "declare": false,
            "start": 5198,
            "end": 5293
          },
          "definite": false,
          "start": 5171,
          "end": 5293
        }
      ],
      "declare": false,
      "start": 5167,
      "end": 5293
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
            "name": "StaticCallerFn_Anonymous2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5299,
            "end": 5324
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FunctionPropertyNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5347,
                      "end": 5368
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "caller",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5369,
                      "end": 5375
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5347,
                    "end": 5375
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
                      "start": 5379,
                      "end": 5381
                    },
                    "expression": false,
                    "start": 5376,
                    "end": 5381
                  },
                  "kind": "method",
                  "computed": true,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 5339,
                  "end": 5381
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FunctionPropertyNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5428,
                      "end": 5449
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "caller",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5450,
                      "end": 5456
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5428,
                    "end": 5456
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
                      "start": 5460,
                      "end": 5462
                    },
                    "expression": false,
                    "start": 5457,
                    "end": 5462
                  },
                  "kind": "method",
                  "computed": true,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 5427,
                  "end": 5462
                }
              ],
              "start": 5333,
              "end": 5470
            },
            "abstract": false,
            "declare": false,
            "start": 5327,
            "end": 5470
          },
          "definite": false,
          "start": 5299,
          "end": 5470
        }
      ],
      "declare": false,
      "start": 5295,
      "end": 5470
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
            "name": "StaticArguments_Anonymous",
            "optional": false,
            "typeAnnotation": null,
            "start": 5489,
            "end": 5514
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5536,
                    "end": 5545
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5547,
                      "end": 5553
                    },
                    "start": 5545,
                    "end": 5553
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 5529,
                  "end": 5554
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5600,
                    "end": 5609
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 5611,
                      "end": 5617
                    },
                    "start": 5609,
                    "end": 5617
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 5600,
                  "end": 5618
                }
              ],
              "start": 5523,
              "end": 5626
            },
            "abstract": false,
            "declare": false,
            "start": 5517,
            "end": 5626
          },
          "definite": false,
          "start": 5489,
          "end": 5626
        }
      ],
      "declare": false,
      "start": 5485,
      "end": 5626
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
            "name": "StaticArguments_Anonymous2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5632,
            "end": 5658
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FunctionPropertyNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5681,
                      "end": 5702
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5703,
                      "end": 5712
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5681,
                    "end": 5712
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5715,
                      "end": 5721
                    },
                    "start": 5713,
                    "end": 5721
                  },
                  "value": null,
                  "computed": true,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 5673,
                  "end": 5722
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FunctionPropertyNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5769,
                      "end": 5790
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5791,
                      "end": 5800
                    },
                    "optional": false,
                    "computed": false,
                    "start": 5769,
                    "end": 5800
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 5803,
                      "end": 5809
                    },
                    "start": 5801,
                    "end": 5809
                  },
                  "value": null,
                  "computed": true,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 5768,
                  "end": 5810
                }
              ],
              "start": 5667,
              "end": 5818
            },
            "abstract": false,
            "declare": false,
            "start": 5661,
            "end": 5818
          },
          "definite": false,
          "start": 5632,
          "end": 5818
        }
      ],
      "declare": false,
      "start": 5628,
      "end": 5818
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
            "name": "StaticArgumentsFn_Anonymous",
            "optional": false,
            "typeAnnotation": null,
            "start": 5824,
            "end": 5851
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5873,
                    "end": 5882
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
                      "start": 5885,
                      "end": 5887
                    },
                    "expression": false,
                    "start": 5882,
                    "end": 5887
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 5866,
                  "end": 5887
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5933,
                    "end": 5942
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
                      "start": 5945,
                      "end": 5947
                    },
                    "expression": false,
                    "start": 5942,
                    "end": 5947
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 5933,
                  "end": 5947
                }
              ],
              "start": 5860,
              "end": 5955
            },
            "abstract": false,
            "declare": false,
            "start": 5854,
            "end": 5955
          },
          "definite": false,
          "start": 5824,
          "end": 5955
        }
      ],
      "declare": false,
      "start": 5820,
      "end": 5955
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
            "name": "StaticArgumentsFn_Anonymous2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5961,
            "end": 5989
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
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
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FunctionPropertyNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6012,
                      "end": 6033
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6034,
                      "end": 6043
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6012,
                    "end": 6043
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
                      "start": 6047,
                      "end": 6049
                    },
                    "expression": false,
                    "start": 6044,
                    "end": 6049
                  },
                  "kind": "method",
                  "computed": true,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 6004,
                  "end": 6049
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "FunctionPropertyNames",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6096,
                      "end": 6117
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6118,
                      "end": 6127
                    },
                    "optional": false,
                    "computed": false,
                    "start": 6096,
                    "end": 6127
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
                      "start": 6131,
                      "end": 6133
                    },
                    "expression": false,
                    "start": 6128,
                    "end": 6133
                  },
                  "kind": "method",
                  "computed": true,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 6095,
                  "end": 6133
                }
              ],
              "start": 5998,
              "end": 6141
            },
            "abstract": false,
            "declare": false,
            "start": 5992,
            "end": 6141
          },
          "definite": false,
          "start": 5961,
          "end": 6141
        }
      ],
      "declare": false,
      "start": 5957,
      "end": 6141
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestOnDefaultExportedClass_1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6220,
        "end": 6248
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "StaticName",
              "optional": false,
              "typeAnnotation": null,
              "start": 6261,
              "end": 6271
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6289,
                    "end": 6293
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 6295,
                      "end": 6301
                    },
                    "start": 6293,
                    "end": 6301
                  },
                  "value": null,
                  "computed": false,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 6282,
                  "end": 6302
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6352,
                    "end": 6356
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 6358,
                      "end": 6364
                    },
                    "start": 6356,
                    "end": 6364
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 6352,
                  "end": 6365
                }
              ],
              "start": 6272,
              "end": 6377
            },
            "abstract": false,
            "declare": false,
            "start": 6255,
            "end": 6377
          }
        ],
        "start": 6249,
        "end": 6379
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 6210,
      "end": 6379
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExportedStaticName",
          "optional": false,
          "typeAnnotation": null,
          "start": 6394,
          "end": 6412
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6427,
                  "end": 6448
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6449,
                  "end": 6453
                },
                "optional": false,
                "computed": false,
                "start": 6427,
                "end": 6453
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 6456,
                  "end": 6462
                },
                "start": 6454,
                "end": 6462
              },
              "value": null,
              "computed": true,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 6419,
              "end": 6463
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6510,
                  "end": 6531
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6532,
                  "end": 6536
                },
                "optional": false,
                "computed": false,
                "start": 6510,
                "end": 6536
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 6539,
                  "end": 6545
                },
                "start": 6537,
                "end": 6545
              },
              "value": null,
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 6509,
              "end": 6546
            }
          ],
          "start": 6413,
          "end": 6554
        },
        "abstract": false,
        "declare": false,
        "start": 6388,
        "end": 6554
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6381,
      "end": 6554
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestOnDefaultExportedClass_2",
        "optional": false,
        "typeAnnotation": null,
        "start": 6566,
        "end": 6594
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "StaticNameFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 6607,
              "end": 6619
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6637,
                    "end": 6641
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
                      "start": 6644,
                      "end": 6646
                    },
                    "expression": false,
                    "start": 6641,
                    "end": 6646
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 6630,
                  "end": 6646
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6696,
                    "end": 6700
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
                      "start": 6703,
                      "end": 6705
                    },
                    "expression": false,
                    "start": 6700,
                    "end": 6705
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 6696,
                  "end": 6705
                }
              ],
              "start": 6620,
              "end": 6717
            },
            "abstract": false,
            "declare": false,
            "start": 6601,
            "end": 6717
          }
        ],
        "start": 6595,
        "end": 6719
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 6556,
      "end": 6719
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExportedStaticNameFn",
          "optional": false,
          "typeAnnotation": null,
          "start": 6734,
          "end": 6754
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6769,
                  "end": 6790
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6791,
                  "end": 6795
                },
                "optional": false,
                "computed": false,
                "start": 6769,
                "end": 6795
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
                  "start": 6799,
                  "end": 6801
                },
                "expression": false,
                "start": 6796,
                "end": 6801
              },
              "kind": "method",
              "computed": true,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 6761,
              "end": 6801
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6848,
                  "end": 6869
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6870,
                  "end": 6874
                },
                "optional": false,
                "computed": false,
                "start": 6848,
                "end": 6874
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
                  "start": 6878,
                  "end": 6880
                },
                "expression": false,
                "start": 6875,
                "end": 6880
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 6847,
              "end": 6880
            }
          ],
          "start": 6755,
          "end": 6888
        },
        "abstract": false,
        "declare": false,
        "start": 6728,
        "end": 6888
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 6721,
      "end": 6888
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestOnDefaultExportedClass_3",
        "optional": false,
        "typeAnnotation": null,
        "start": 6910,
        "end": 6938
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "StaticLength",
                "optional": false,
                "typeAnnotation": null,
                "start": 6966,
                "end": 6978
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
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6996,
                      "end": 7002
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 7004,
                        "end": 7010
                      },
                      "start": 7002,
                      "end": 7010
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 6989,
                    "end": 7011
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7061,
                      "end": 7067
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 7069,
                        "end": 7075
                      },
                      "start": 7067,
                      "end": 7075
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 7061,
                    "end": 7076
                  }
                ],
                "start": 6979,
                "end": 7088
              },
              "abstract": false,
              "declare": false,
              "start": 6960,
              "end": 7088
            },
            "exportKind": "value",
            "start": 6945,
            "end": 7088
          }
        ],
        "start": 6939,
        "end": 7090
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 6900,
      "end": 7090
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExportedStaticLength",
          "optional": false,
          "typeAnnotation": null,
          "start": 7105,
          "end": 7125
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7140,
                  "end": 7161
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7162,
                  "end": 7168
                },
                "optional": false,
                "computed": false,
                "start": 7140,
                "end": 7168
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 7171,
                  "end": 7177
                },
                "start": 7169,
                "end": 7177
              },
              "value": null,
              "computed": true,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 7132,
              "end": 7178
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7225,
                  "end": 7246
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7247,
                  "end": 7253
                },
                "optional": false,
                "computed": false,
                "start": 7225,
                "end": 7253
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 7256,
                  "end": 7262
                },
                "start": 7254,
                "end": 7262
              },
              "value": null,
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 7224,
              "end": 7263
            }
          ],
          "start": 7126,
          "end": 7271
        },
        "abstract": false,
        "declare": false,
        "start": 7099,
        "end": 7271
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7092,
      "end": 7271
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestOnDefaultExportedClass_4",
        "optional": false,
        "typeAnnotation": null,
        "start": 7283,
        "end": 7311
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "StaticLengthFn",
                "optional": false,
                "typeAnnotation": null,
                "start": 7339,
                "end": 7353
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
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7371,
                      "end": 7377
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
                        "start": 7380,
                        "end": 7382
                      },
                      "expression": false,
                      "start": 7377,
                      "end": 7382
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7364,
                    "end": 7382
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7432,
                      "end": 7438
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
                        "start": 7441,
                        "end": 7443
                      },
                      "expression": false,
                      "start": 7438,
                      "end": 7443
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 7432,
                    "end": 7443
                  }
                ],
                "start": 7354,
                "end": 7455
              },
              "abstract": false,
              "declare": false,
              "start": 7333,
              "end": 7455
            },
            "exportKind": "value",
            "start": 7318,
            "end": 7455
          }
        ],
        "start": 7312,
        "end": 7457
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 7273,
      "end": 7457
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExportedStaticLengthFn",
          "optional": false,
          "typeAnnotation": null,
          "start": 7472,
          "end": 7494
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7509,
                  "end": 7530
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7531,
                  "end": 7537
                },
                "optional": false,
                "computed": false,
                "start": 7509,
                "end": 7537
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
                  "start": 7541,
                  "end": 7543
                },
                "expression": false,
                "start": 7538,
                "end": 7543
              },
              "kind": "method",
              "computed": true,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 7501,
              "end": 7543
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7590,
                  "end": 7611
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7612,
                  "end": 7618
                },
                "optional": false,
                "computed": false,
                "start": 7590,
                "end": 7618
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
                  "start": 7622,
                  "end": 7624
                },
                "expression": false,
                "start": 7619,
                "end": 7624
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 7589,
              "end": 7624
            }
          ],
          "start": 7495,
          "end": 7632
        },
        "abstract": false,
        "declare": false,
        "start": 7466,
        "end": 7632
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7459,
      "end": 7632
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestOnDefaultExportedClass_5",
        "optional": false,
        "typeAnnotation": null,
        "start": 7657,
        "end": 7685
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "StaticPrototype",
                "optional": false,
                "typeAnnotation": null,
                "start": 7713,
                "end": 7728
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
                      "name": "prototype",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7746,
                      "end": 7755
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 7757,
                        "end": 7763
                      },
                      "start": 7755,
                      "end": 7763
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 7739,
                    "end": 7764
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prototype",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7792,
                      "end": 7801
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 7803,
                        "end": 7809
                      },
                      "start": 7801,
                      "end": 7809
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 7792,
                    "end": 7810
                  }
                ],
                "start": 7729,
                "end": 7822
              },
              "abstract": false,
              "declare": false,
              "start": 7707,
              "end": 7822
            },
            "exportKind": "value",
            "start": 7692,
            "end": 7822
          }
        ],
        "start": 7686,
        "end": 7824
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 7647,
      "end": 7824
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExportedStaticPrototype",
          "optional": false,
          "typeAnnotation": null,
          "start": 7839,
          "end": 7862
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7877,
                  "end": 7898
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prototype",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7899,
                  "end": 7908
                },
                "optional": false,
                "computed": false,
                "start": 7877,
                "end": 7908
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 7911,
                  "end": 7917
                },
                "start": 7909,
                "end": 7917
              },
              "value": null,
              "computed": true,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 7869,
              "end": 7918
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7943,
                  "end": 7964
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prototype",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7965,
                  "end": 7974
                },
                "optional": false,
                "computed": false,
                "start": 7943,
                "end": 7974
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 7977,
                  "end": 7983
                },
                "start": 7975,
                "end": 7983
              },
              "value": null,
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 7942,
              "end": 7984
            }
          ],
          "start": 7863,
          "end": 7992
        },
        "abstract": false,
        "declare": false,
        "start": 7833,
        "end": 7992
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 7826,
      "end": 7992
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestOnDefaultExportedClass_6",
        "optional": false,
        "typeAnnotation": null,
        "start": 8004,
        "end": 8032
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "StaticPrototypeFn",
                "optional": false,
                "typeAnnotation": null,
                "start": 8060,
                "end": 8077
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
                      "name": "prototype",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8095,
                      "end": 8104
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
                        "start": 8107,
                        "end": 8109
                      },
                      "expression": false,
                      "start": 8104,
                      "end": 8109
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8088,
                    "end": 8109
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "prototype",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8137,
                      "end": 8146
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
                        "start": 8149,
                        "end": 8151
                      },
                      "expression": false,
                      "start": 8146,
                      "end": 8151
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8137,
                    "end": 8151
                  }
                ],
                "start": 8078,
                "end": 8163
              },
              "abstract": false,
              "declare": false,
              "start": 8054,
              "end": 8163
            },
            "exportKind": "value",
            "start": 8039,
            "end": 8163
          }
        ],
        "start": 8033,
        "end": 8165
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 7994,
      "end": 8165
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExportedStaticPrototypeFn",
          "optional": false,
          "typeAnnotation": null,
          "start": 8180,
          "end": 8205
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8220,
                  "end": 8241
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prototype",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8242,
                  "end": 8251
                },
                "optional": false,
                "computed": false,
                "start": 8220,
                "end": 8251
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
                  "start": 8255,
                  "end": 8257
                },
                "expression": false,
                "start": 8252,
                "end": 8257
              },
              "kind": "method",
              "computed": true,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 8212,
              "end": 8257
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8282,
                  "end": 8303
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prototype",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8304,
                  "end": 8313
                },
                "optional": false,
                "computed": false,
                "start": 8282,
                "end": 8313
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
                  "start": 8317,
                  "end": 8319
                },
                "expression": false,
                "start": 8314,
                "end": 8319
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 8281,
              "end": 8319
            }
          ],
          "start": 8206,
          "end": 8327
        },
        "abstract": false,
        "declare": false,
        "start": 8174,
        "end": 8327
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8167,
      "end": 8327
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestOnDefaultExportedClass_7",
        "optional": false,
        "typeAnnotation": null,
        "start": 8349,
        "end": 8377
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "StaticCaller",
                "optional": false,
                "typeAnnotation": null,
                "start": 8405,
                "end": 8417
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
                      "name": "caller",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8435,
                      "end": 8441
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 8443,
                        "end": 8449
                      },
                      "start": 8441,
                      "end": 8449
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 8428,
                    "end": 8450
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "caller",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8500,
                      "end": 8506
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 8508,
                        "end": 8514
                      },
                      "start": 8506,
                      "end": 8514
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 8500,
                    "end": 8515
                  }
                ],
                "start": 8418,
                "end": 8527
              },
              "abstract": false,
              "declare": false,
              "start": 8399,
              "end": 8527
            },
            "exportKind": "value",
            "start": 8384,
            "end": 8527
          }
        ],
        "start": 8378,
        "end": 8529
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 8339,
      "end": 8529
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExportedStaticCaller",
          "optional": false,
          "typeAnnotation": null,
          "start": 8544,
          "end": 8564
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8579,
                  "end": 8600
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "caller",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8601,
                  "end": 8607
                },
                "optional": false,
                "computed": false,
                "start": 8579,
                "end": 8607
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 8610,
                  "end": 8616
                },
                "start": 8608,
                "end": 8616
              },
              "value": null,
              "computed": true,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 8571,
              "end": 8617
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8664,
                  "end": 8685
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "caller",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8686,
                  "end": 8692
                },
                "optional": false,
                "computed": false,
                "start": 8664,
                "end": 8692
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 8695,
                  "end": 8701
                },
                "start": 8693,
                "end": 8701
              },
              "value": null,
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 8663,
              "end": 8702
            }
          ],
          "start": 8565,
          "end": 8710
        },
        "abstract": false,
        "declare": false,
        "start": 8538,
        "end": 8710
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8531,
      "end": 8710
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestOnDefaultExportedClass_8",
        "optional": false,
        "typeAnnotation": null,
        "start": 8722,
        "end": 8750
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "StaticCallerFn",
                "optional": false,
                "typeAnnotation": null,
                "start": 8778,
                "end": 8792
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
                      "name": "caller",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8810,
                      "end": 8816
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
                        "start": 8819,
                        "end": 8821
                      },
                      "expression": false,
                      "start": 8816,
                      "end": 8821
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8803,
                    "end": 8821
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "caller",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8871,
                      "end": 8877
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
                        "start": 8880,
                        "end": 8882
                      },
                      "expression": false,
                      "start": 8877,
                      "end": 8882
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 8871,
                    "end": 8882
                  }
                ],
                "start": 8793,
                "end": 8894
              },
              "abstract": false,
              "declare": false,
              "start": 8772,
              "end": 8894
            },
            "exportKind": "value",
            "start": 8757,
            "end": 8894
          }
        ],
        "start": 8751,
        "end": 8896
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 8712,
      "end": 8896
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExportedStaticCallerFn",
          "optional": false,
          "typeAnnotation": null,
          "start": 8911,
          "end": 8933
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8948,
                  "end": 8969
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "caller",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8970,
                  "end": 8976
                },
                "optional": false,
                "computed": false,
                "start": 8948,
                "end": 8976
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
                  "start": 8980,
                  "end": 8982
                },
                "expression": false,
                "start": 8977,
                "end": 8982
              },
              "kind": "method",
              "computed": true,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 8940,
              "end": 8982
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9029,
                  "end": 9050
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "caller",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9051,
                  "end": 9057
                },
                "optional": false,
                "computed": false,
                "start": 9029,
                "end": 9057
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
                  "start": 9061,
                  "end": 9063
                },
                "expression": false,
                "start": 9058,
                "end": 9063
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 9028,
              "end": 9063
            }
          ],
          "start": 8934,
          "end": 9071
        },
        "abstract": false,
        "declare": false,
        "start": 8905,
        "end": 9071
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 8898,
      "end": 9071
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestOnDefaultExportedClass_9",
        "optional": false,
        "typeAnnotation": null,
        "start": 9096,
        "end": 9124
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "StaticArguments",
                "optional": false,
                "typeAnnotation": null,
                "start": 9152,
                "end": 9167
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
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9185,
                      "end": 9194
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 9196,
                        "end": 9202
                      },
                      "start": 9194,
                      "end": 9202
                    },
                    "value": null,
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 9178,
                    "end": 9203
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9253,
                      "end": 9262
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 9264,
                        "end": 9270
                      },
                      "start": 9262,
                      "end": 9270
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 9253,
                    "end": 9271
                  }
                ],
                "start": 9168,
                "end": 9283
              },
              "abstract": false,
              "declare": false,
              "start": 9146,
              "end": 9283
            },
            "exportKind": "value",
            "start": 9131,
            "end": 9283
          }
        ],
        "start": 9125,
        "end": 9285
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 9086,
      "end": 9285
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExportedStaticArguments",
          "optional": false,
          "typeAnnotation": null,
          "start": 9300,
          "end": 9323
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9338,
                  "end": 9359
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9360,
                  "end": 9369
                },
                "optional": false,
                "computed": false,
                "start": 9338,
                "end": 9369
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 9372,
                  "end": 9378
                },
                "start": 9370,
                "end": 9378
              },
              "value": null,
              "computed": true,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 9330,
              "end": 9379
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9426,
                  "end": 9447
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9448,
                  "end": 9457
                },
                "optional": false,
                "computed": false,
                "start": 9426,
                "end": 9457
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 9460,
                  "end": 9466
                },
                "start": 9458,
                "end": 9466
              },
              "value": null,
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 9425,
              "end": 9467
            }
          ],
          "start": 9324,
          "end": 9475
        },
        "abstract": false,
        "declare": false,
        "start": 9294,
        "end": 9475
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9287,
      "end": 9475
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TestOnDefaultExportedClass_10",
        "optional": false,
        "typeAnnotation": null,
        "start": 9487,
        "end": 9516
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportDefaultDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "StaticArgumentsFn",
                "optional": false,
                "typeAnnotation": null,
                "start": 9544,
                "end": 9561
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
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9579,
                      "end": 9588
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
                        "start": 9591,
                        "end": 9593
                      },
                      "expression": false,
                      "start": 9588,
                      "end": 9593
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9572,
                    "end": 9593
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arguments",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9643,
                      "end": 9652
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
                        "start": 9655,
                        "end": 9657
                      },
                      "expression": false,
                      "start": 9652,
                      "end": 9657
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 9643,
                    "end": 9657
                  }
                ],
                "start": 9562,
                "end": 9669
              },
              "abstract": false,
              "declare": false,
              "start": 9538,
              "end": 9669
            },
            "exportKind": "value",
            "start": 9523,
            "end": 9669
          }
        ],
        "start": 9517,
        "end": 9671
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 9477,
      "end": 9671
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ExportedStaticArgumentsFn",
          "optional": false,
          "typeAnnotation": null,
          "start": 9686,
          "end": 9711
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9726,
                  "end": 9747
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9748,
                  "end": 9757
                },
                "optional": false,
                "computed": false,
                "start": 9726,
                "end": 9757
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
                  "start": 9761,
                  "end": 9763
                },
                "expression": false,
                "start": 9758,
                "end": 9763
              },
              "kind": "method",
              "computed": true,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 9718,
              "end": 9763
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FunctionPropertyNames",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9810,
                  "end": 9831
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9832,
                  "end": 9841
                },
                "optional": false,
                "computed": false,
                "start": 9810,
                "end": 9841
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
                  "start": 9845,
                  "end": 9847
                },
                "expression": false,
                "start": 9842,
                "end": 9847
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 9809,
              "end": 9847
            }
          ],
          "start": 9712,
          "end": 9855
        },
        "abstract": false,
        "declare": false,
        "start": 9680,
        "end": 9855
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 9673,
      "end": 9855
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 9855
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 6,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 36,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41
  },
  {
    "type": "String",
    "value": "'name'",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "String",
    "value": "'length'",
    "start": 62,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 76,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "String",
    "value": "'prototype'",
    "start": 87,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "String",
    "value": "'caller'",
    "start": 112,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 126,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 135,
    "end": 136
  },
  {
    "type": "String",
    "value": "'arguments'",
    "start": 137,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 152,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 155,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 171,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "StaticName",
    "start": 177,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 194,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 201,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 260,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 266,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 283,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "StaticName2",
    "start": 289,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 307,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 315,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 337,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 344,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 398,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 420,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 427,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 433,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 441,
    "end": 442
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 444,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "StaticNameFn",
    "start": 450,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 463,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 469,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 476,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 483,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 531,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 547,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 550,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "StaticNameFn2",
    "start": 556,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 570,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 576,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 584,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 606,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 611,
    "end": 612
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 662,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 663,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 685,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 689,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 690,
    "end": 691
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 691,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 702,
    "end": 703
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 715,
    "end": 720
  },
  {
    "type": "Identifier",
    "value": "StaticLength",
    "start": 721,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 734,
    "end": 735
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 740,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 747,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 755,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 808,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 816,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 830,
    "end": 831
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 833,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "StaticLength2",
    "start": 839,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 853,
    "end": 854
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 859,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 867,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 888,
    "end": 889
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 889,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 898,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 904,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 951,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 952,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 974,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 980,
    "end": 981
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 981,
    "end": 982
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 983,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 997,
    "end": 998
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1000,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "StaticLengthFn",
    "start": 1006,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1027,
    "end": 1033
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1034,
    "end": 1040
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1040,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1043,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1091,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1097,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1101,
    "end": 1102
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1109,
    "end": 1110
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1112,
    "end": 1117
  },
  {
    "type": "Identifier",
    "value": "StaticLengthFn2",
    "start": 1118,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1140,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 1148,
    "end": 1169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1170,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1180,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 1229,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 1251,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1262,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1286,
    "end": 1291
  },
  {
    "type": "Identifier",
    "value": "StaticPrototype",
    "start": 1292,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1314,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 1321,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1332,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 1363,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1374,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1391,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "StaticPrototype2",
    "start": 1397,
    "end": 1413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1414,
    "end": 1415
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1420,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1427,
    "end": 1428
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 1428,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 1450,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1460,
    "end": 1461
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1462,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 1494,
    "end": 1515
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1515,
    "end": 1516
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 1516,
    "end": 1525
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1525,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1528,
    "end": 1534
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1542,
    "end": 1543
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1545,
    "end": 1550
  },
  {
    "type": "Identifier",
    "value": "StaticPrototypeFn",
    "start": 1551,
    "end": 1568
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1575,
    "end": 1581
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 1582,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1592,
    "end": 1593
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1594,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 1620,
    "end": 1629
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1629,
    "end": 1630
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1630,
    "end": 1631
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1632,
    "end": 1633
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1633,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1644,
    "end": 1649
  },
  {
    "type": "Identifier",
    "value": "StaticPrototypeFn2",
    "start": 1650,
    "end": 1668
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1669,
    "end": 1670
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1675,
    "end": 1681
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1682,
    "end": 1683
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 1683,
    "end": 1704
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1704,
    "end": 1705
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 1705,
    "end": 1714
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1714,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1716,
    "end": 1717
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1718,
    "end": 1719
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1719,
    "end": 1720
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1744,
    "end": 1745
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 1745,
    "end": 1766
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 1767,
    "end": 1776
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1776,
    "end": 1777
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1777,
    "end": 1778
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1778,
    "end": 1779
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1780,
    "end": 1781
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1781,
    "end": 1782
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1789,
    "end": 1790
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1802,
    "end": 1807
  },
  {
    "type": "Identifier",
    "value": "StaticCaller",
    "start": 1808,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1821,
    "end": 1822
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1827,
    "end": 1833
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 1834,
    "end": 1840
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1840,
    "end": 1841
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1842,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 1895,
    "end": 1901
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1901,
    "end": 1902
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1903,
    "end": 1909
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1909,
    "end": 1910
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1917,
    "end": 1918
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1920,
    "end": 1925
  },
  {
    "type": "Identifier",
    "value": "StaticCaller2",
    "start": 1926,
    "end": 1939
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1946,
    "end": 1952
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1953,
    "end": 1954
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 1954,
    "end": 1975
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1975,
    "end": 1976
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 1976,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1985,
    "end": 1991
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1991,
    "end": 1992
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 2039,
    "end": 2060
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2060,
    "end": 2061
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 2061,
    "end": 2067
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2067,
    "end": 2068
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2068,
    "end": 2069
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2070,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2076,
    "end": 2077
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2084,
    "end": 2085
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2087,
    "end": 2092
  },
  {
    "type": "Identifier",
    "value": "StaticCallerFn",
    "start": 2093,
    "end": 2107
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2108,
    "end": 2109
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2114,
    "end": 2120
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 2121,
    "end": 2127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2127,
    "end": 2128
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2128,
    "end": 2129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2130,
    "end": 2131
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2131,
    "end": 2132
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 2178,
    "end": 2184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2184,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2187,
    "end": 2188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2188,
    "end": 2189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2196,
    "end": 2197
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2199,
    "end": 2204
  },
  {
    "type": "Identifier",
    "value": "StaticCallerFn2",
    "start": 2205,
    "end": 2220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2221,
    "end": 2222
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2227,
    "end": 2233
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2234,
    "end": 2235
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 2235,
    "end": 2256
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2256,
    "end": 2257
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 2257,
    "end": 2263
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2263,
    "end": 2264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2264,
    "end": 2265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2265,
    "end": 2266
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2267,
    "end": 2268
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2268,
    "end": 2269
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2315,
    "end": 2316
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 2316,
    "end": 2337
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2337,
    "end": 2338
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 2338,
    "end": 2344
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2344,
    "end": 2345
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2345,
    "end": 2346
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2346,
    "end": 2347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2348,
    "end": 2349
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2349,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2357,
    "end": 2358
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2373,
    "end": 2378
  },
  {
    "type": "Identifier",
    "value": "StaticArguments",
    "start": 2379,
    "end": 2394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2395,
    "end": 2396
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2401,
    "end": 2407
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 2408,
    "end": 2417
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2417,
    "end": 2418
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2419,
    "end": 2425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2425,
    "end": 2426
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 2472,
    "end": 2481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2481,
    "end": 2482
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2483,
    "end": 2489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2489,
    "end": 2490
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2497,
    "end": 2498
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2500,
    "end": 2505
  },
  {
    "type": "Identifier",
    "value": "StaticArguments2",
    "start": 2506,
    "end": 2522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2523,
    "end": 2524
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2529,
    "end": 2535
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2536,
    "end": 2537
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 2537,
    "end": 2558
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2558,
    "end": 2559
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 2559,
    "end": 2568
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2568,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2571,
    "end": 2577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2577,
    "end": 2578
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2624,
    "end": 2625
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 2625,
    "end": 2646
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2646,
    "end": 2647
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 2647,
    "end": 2656
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2656,
    "end": 2657
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2657,
    "end": 2658
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2659,
    "end": 2665
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2665,
    "end": 2666
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2673,
    "end": 2674
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2676,
    "end": 2681
  },
  {
    "type": "Identifier",
    "value": "StaticArgumentsFn",
    "start": 2682,
    "end": 2699
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2700,
    "end": 2701
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2706,
    "end": 2712
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 2713,
    "end": 2722
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2722,
    "end": 2723
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2723,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2725,
    "end": 2726
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2726,
    "end": 2727
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 2773,
    "end": 2782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2782,
    "end": 2783
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2783,
    "end": 2784
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2785,
    "end": 2786
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2786,
    "end": 2787
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2794,
    "end": 2795
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2797,
    "end": 2802
  },
  {
    "type": "Identifier",
    "value": "StaticArgumentsFn2",
    "start": 2803,
    "end": 2821
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2822,
    "end": 2823
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 2828,
    "end": 2834
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2835,
    "end": 2836
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 2836,
    "end": 2857
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2857,
    "end": 2858
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 2858,
    "end": 2867
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2867,
    "end": 2868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2868,
    "end": 2869
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2869,
    "end": 2870
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2871,
    "end": 2872
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2872,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2919,
    "end": 2920
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 2920,
    "end": 2941
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2941,
    "end": 2942
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 2942,
    "end": 2951
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2951,
    "end": 2952
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2952,
    "end": 2953
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2953,
    "end": 2954
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2955,
    "end": 2956
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2956,
    "end": 2957
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2964,
    "end": 2965
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3027,
    "end": 3030
  },
  {
    "type": "Identifier",
    "value": "StaticName_Anonymous",
    "start": 3031,
    "end": 3051
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3052,
    "end": 3053
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3054,
    "end": 3059
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3060,
    "end": 3061
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3066,
    "end": 3072
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3073,
    "end": 3077
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3077,
    "end": 3078
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3079,
    "end": 3085
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3085,
    "end": 3086
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3132,
    "end": 3136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3136,
    "end": 3137
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3138,
    "end": 3144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3144,
    "end": 3145
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3152,
    "end": 3153
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3155,
    "end": 3158
  },
  {
    "type": "Identifier",
    "value": "StaticName_Anonymous2",
    "start": 3159,
    "end": 3180
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3181,
    "end": 3182
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3183,
    "end": 3188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3195,
    "end": 3201
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 3203,
    "end": 3224
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3224,
    "end": 3225
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3225,
    "end": 3229
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3229,
    "end": 3230
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3230,
    "end": 3231
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3232,
    "end": 3238
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3238,
    "end": 3239
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3285,
    "end": 3286
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 3286,
    "end": 3307
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3307,
    "end": 3308
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3308,
    "end": 3312
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3312,
    "end": 3313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3313,
    "end": 3314
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3315,
    "end": 3321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3321,
    "end": 3322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3329,
    "end": 3330
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3332,
    "end": 3335
  },
  {
    "type": "Identifier",
    "value": "StaticNameFn_Anonymous",
    "start": 3336,
    "end": 3358
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3359,
    "end": 3360
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3361,
    "end": 3366
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3367,
    "end": 3368
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3373,
    "end": 3379
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3380,
    "end": 3384
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3384,
    "end": 3385
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3385,
    "end": 3386
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3387,
    "end": 3388
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3388,
    "end": 3389
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3435,
    "end": 3439
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3439,
    "end": 3440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3442,
    "end": 3443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3443,
    "end": 3444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3451,
    "end": 3452
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3454,
    "end": 3457
  },
  {
    "type": "Identifier",
    "value": "StaticNameFn_Anonymous2",
    "start": 3458,
    "end": 3481
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3482,
    "end": 3483
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3484,
    "end": 3489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3490,
    "end": 3491
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3496,
    "end": 3502
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3503,
    "end": 3504
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 3504,
    "end": 3525
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3525,
    "end": 3526
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3526,
    "end": 3530
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3530,
    "end": 3531
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3531,
    "end": 3532
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3532,
    "end": 3533
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3534,
    "end": 3535
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3535,
    "end": 3536
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3582,
    "end": 3583
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 3583,
    "end": 3604
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3604,
    "end": 3605
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 3605,
    "end": 3609
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3609,
    "end": 3610
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3610,
    "end": 3611
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3611,
    "end": 3612
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3613,
    "end": 3614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3614,
    "end": 3615
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3622,
    "end": 3623
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3635,
    "end": 3638
  },
  {
    "type": "Identifier",
    "value": "StaticLength_Anonymous",
    "start": 3639,
    "end": 3661
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3662,
    "end": 3663
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3664,
    "end": 3669
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3670,
    "end": 3671
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3676,
    "end": 3682
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3683,
    "end": 3689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3689,
    "end": 3690
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3691,
    "end": 3697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3697,
    "end": 3698
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3744,
    "end": 3750
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3750,
    "end": 3751
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3752,
    "end": 3758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3758,
    "end": 3759
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3766,
    "end": 3767
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3769,
    "end": 3772
  },
  {
    "type": "Identifier",
    "value": "StaticLength_Anonymous2",
    "start": 3773,
    "end": 3796
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3797,
    "end": 3798
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3799,
    "end": 3804
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3805,
    "end": 3806
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3811,
    "end": 3817
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3818,
    "end": 3819
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 3819,
    "end": 3840
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3840,
    "end": 3841
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3841,
    "end": 3847
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3847,
    "end": 3848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3848,
    "end": 3849
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3850,
    "end": 3856
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3856,
    "end": 3857
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3903,
    "end": 3904
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 3904,
    "end": 3925
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3925,
    "end": 3926
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 3926,
    "end": 3932
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3932,
    "end": 3933
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3933,
    "end": 3934
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3935,
    "end": 3941
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3941,
    "end": 3942
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3949,
    "end": 3950
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3952,
    "end": 3955
  },
  {
    "type": "Identifier",
    "value": "StaticLengthFn_Anonymous",
    "start": 3956,
    "end": 3980
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3981,
    "end": 3982
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3983,
    "end": 3988
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3989,
    "end": 3990
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 3995,
    "end": 4001
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4002,
    "end": 4008
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4008,
    "end": 4009
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4009,
    "end": 4010
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4011,
    "end": 4012
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4012,
    "end": 4013
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4059,
    "end": 4065
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4065,
    "end": 4066
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4066,
    "end": 4067
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4068,
    "end": 4069
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4069,
    "end": 4070
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4077,
    "end": 4078
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4080,
    "end": 4083
  },
  {
    "type": "Identifier",
    "value": "StaticLengthFn_Anonymous2",
    "start": 4084,
    "end": 4109
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4110,
    "end": 4111
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4112,
    "end": 4117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4118,
    "end": 4119
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4124,
    "end": 4130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4131,
    "end": 4132
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 4132,
    "end": 4153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4153,
    "end": 4154
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4154,
    "end": 4160
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4160,
    "end": 4161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4161,
    "end": 4162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4162,
    "end": 4163
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4164,
    "end": 4165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4165,
    "end": 4166
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4212,
    "end": 4213
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 4213,
    "end": 4234
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4234,
    "end": 4235
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4235,
    "end": 4241
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4241,
    "end": 4242
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4242,
    "end": 4243
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4243,
    "end": 4244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4245,
    "end": 4246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4246,
    "end": 4247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4254,
    "end": 4255
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4270,
    "end": 4273
  },
  {
    "type": "Identifier",
    "value": "StaticPrototype_Anonymous",
    "start": 4274,
    "end": 4299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4300,
    "end": 4301
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4302,
    "end": 4307
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4308,
    "end": 4309
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4314,
    "end": 4320
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 4321,
    "end": 4330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4330,
    "end": 4331
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4332,
    "end": 4338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4338,
    "end": 4339
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 4363,
    "end": 4372
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4372,
    "end": 4373
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4374,
    "end": 4380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4380,
    "end": 4381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4388,
    "end": 4389
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4391,
    "end": 4394
  },
  {
    "type": "Identifier",
    "value": "StaticPrototype_Anonymous2",
    "start": 4395,
    "end": 4421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4422,
    "end": 4423
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4424,
    "end": 4429
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4430,
    "end": 4431
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4436,
    "end": 4442
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4443,
    "end": 4444
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 4444,
    "end": 4465
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4465,
    "end": 4466
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 4466,
    "end": 4475
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4475,
    "end": 4476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4476,
    "end": 4477
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4478,
    "end": 4484
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4484,
    "end": 4485
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4509,
    "end": 4510
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 4510,
    "end": 4531
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4531,
    "end": 4532
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 4532,
    "end": 4541
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4541,
    "end": 4542
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4542,
    "end": 4543
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4544,
    "end": 4550
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4550,
    "end": 4551
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4558,
    "end": 4559
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4561,
    "end": 4564
  },
  {
    "type": "Identifier",
    "value": "StaticPrototypeFn_Anonymous",
    "start": 4565,
    "end": 4592
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4593,
    "end": 4594
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4595,
    "end": 4600
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4601,
    "end": 4602
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4607,
    "end": 4613
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 4614,
    "end": 4623
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4623,
    "end": 4624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4624,
    "end": 4625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4626,
    "end": 4627
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4627,
    "end": 4628
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 4652,
    "end": 4661
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4661,
    "end": 4662
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4662,
    "end": 4663
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4664,
    "end": 4665
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4665,
    "end": 4666
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4673,
    "end": 4674
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4676,
    "end": 4679
  },
  {
    "type": "Identifier",
    "value": "StaticPrototypeFn_Anonymous2",
    "start": 4680,
    "end": 4708
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4709,
    "end": 4710
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4711,
    "end": 4716
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4717,
    "end": 4718
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4723,
    "end": 4729
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4730,
    "end": 4731
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 4731,
    "end": 4752
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4752,
    "end": 4753
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 4753,
    "end": 4762
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4762,
    "end": 4763
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4763,
    "end": 4764
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4764,
    "end": 4765
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4766,
    "end": 4767
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4767,
    "end": 4768
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4792,
    "end": 4793
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 4793,
    "end": 4814
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4814,
    "end": 4815
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 4815,
    "end": 4824
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4824,
    "end": 4825
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4825,
    "end": 4826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4826,
    "end": 4827
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4828,
    "end": 4829
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4829,
    "end": 4830
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4837,
    "end": 4838
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4850,
    "end": 4853
  },
  {
    "type": "Identifier",
    "value": "StaticCaller_Anonymous",
    "start": 4854,
    "end": 4876
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4877,
    "end": 4878
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4879,
    "end": 4884
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4885,
    "end": 4886
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4891,
    "end": 4897
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 4898,
    "end": 4904
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4904,
    "end": 4905
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4906,
    "end": 4912
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4912,
    "end": 4913
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 4959,
    "end": 4965
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4965,
    "end": 4966
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4967,
    "end": 4973
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4973,
    "end": 4974
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4981,
    "end": 4982
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4984,
    "end": 4987
  },
  {
    "type": "Identifier",
    "value": "StaticCaller_Anonymous2",
    "start": 4988,
    "end": 5011
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5012,
    "end": 5013
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5014,
    "end": 5019
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5020,
    "end": 5021
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5026,
    "end": 5032
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5033,
    "end": 5034
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 5034,
    "end": 5055
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5055,
    "end": 5056
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 5056,
    "end": 5062
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5062,
    "end": 5063
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5063,
    "end": 5064
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5065,
    "end": 5071
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5071,
    "end": 5072
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5118,
    "end": 5119
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 5119,
    "end": 5140
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5140,
    "end": 5141
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 5141,
    "end": 5147
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5147,
    "end": 5148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5148,
    "end": 5149
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5150,
    "end": 5156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5156,
    "end": 5157
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5164,
    "end": 5165
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5167,
    "end": 5170
  },
  {
    "type": "Identifier",
    "value": "StaticCallerFn_Anonymous",
    "start": 5171,
    "end": 5195
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5196,
    "end": 5197
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5198,
    "end": 5203
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5204,
    "end": 5205
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5210,
    "end": 5216
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 5217,
    "end": 5223
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5223,
    "end": 5224
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5224,
    "end": 5225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5226,
    "end": 5227
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5227,
    "end": 5228
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 5274,
    "end": 5280
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5280,
    "end": 5281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5281,
    "end": 5282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5283,
    "end": 5284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5284,
    "end": 5285
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5292,
    "end": 5293
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5295,
    "end": 5298
  },
  {
    "type": "Identifier",
    "value": "StaticCallerFn_Anonymous2",
    "start": 5299,
    "end": 5324
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5325,
    "end": 5326
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5327,
    "end": 5332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5333,
    "end": 5334
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5339,
    "end": 5345
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5346,
    "end": 5347
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 5347,
    "end": 5368
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5368,
    "end": 5369
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 5369,
    "end": 5375
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5375,
    "end": 5376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5376,
    "end": 5377
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5377,
    "end": 5378
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5379,
    "end": 5380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5380,
    "end": 5381
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5427,
    "end": 5428
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 5428,
    "end": 5449
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5449,
    "end": 5450
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 5450,
    "end": 5456
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5456,
    "end": 5457
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5457,
    "end": 5458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5458,
    "end": 5459
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5460,
    "end": 5461
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5461,
    "end": 5462
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5469,
    "end": 5470
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5485,
    "end": 5488
  },
  {
    "type": "Identifier",
    "value": "StaticArguments_Anonymous",
    "start": 5489,
    "end": 5514
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5515,
    "end": 5516
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5517,
    "end": 5522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5523,
    "end": 5524
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5529,
    "end": 5535
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 5536,
    "end": 5545
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5545,
    "end": 5546
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5547,
    "end": 5553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5553,
    "end": 5554
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 5600,
    "end": 5609
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5609,
    "end": 5610
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5611,
    "end": 5617
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5617,
    "end": 5618
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5625,
    "end": 5626
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5628,
    "end": 5631
  },
  {
    "type": "Identifier",
    "value": "StaticArguments_Anonymous2",
    "start": 5632,
    "end": 5658
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5659,
    "end": 5660
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5661,
    "end": 5666
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5667,
    "end": 5668
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5673,
    "end": 5679
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5680,
    "end": 5681
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 5681,
    "end": 5702
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5702,
    "end": 5703
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 5703,
    "end": 5712
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5712,
    "end": 5713
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5713,
    "end": 5714
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5715,
    "end": 5721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5721,
    "end": 5722
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5768,
    "end": 5769
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 5769,
    "end": 5790
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5790,
    "end": 5791
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 5791,
    "end": 5800
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5800,
    "end": 5801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5801,
    "end": 5802
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5803,
    "end": 5809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5809,
    "end": 5810
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5817,
    "end": 5818
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5820,
    "end": 5823
  },
  {
    "type": "Identifier",
    "value": "StaticArgumentsFn_Anonymous",
    "start": 5824,
    "end": 5851
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5852,
    "end": 5853
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5854,
    "end": 5859
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5860,
    "end": 5861
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 5866,
    "end": 5872
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 5873,
    "end": 5882
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5882,
    "end": 5883
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5883,
    "end": 5884
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5885,
    "end": 5886
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5886,
    "end": 5887
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 5933,
    "end": 5942
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5942,
    "end": 5943
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5943,
    "end": 5944
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5945,
    "end": 5946
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5946,
    "end": 5947
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5954,
    "end": 5955
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5957,
    "end": 5960
  },
  {
    "type": "Identifier",
    "value": "StaticArgumentsFn_Anonymous2",
    "start": 5961,
    "end": 5989
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5990,
    "end": 5991
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5992,
    "end": 5997
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5998,
    "end": 5999
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6004,
    "end": 6010
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6011,
    "end": 6012
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 6012,
    "end": 6033
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6033,
    "end": 6034
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 6034,
    "end": 6043
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6043,
    "end": 6044
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6044,
    "end": 6045
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6045,
    "end": 6046
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6047,
    "end": 6048
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6048,
    "end": 6049
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6095,
    "end": 6096
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 6096,
    "end": 6117
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6117,
    "end": 6118
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 6118,
    "end": 6127
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6127,
    "end": 6128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6128,
    "end": 6129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6129,
    "end": 6130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6131,
    "end": 6132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6132,
    "end": 6133
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6140,
    "end": 6141
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 6210,
    "end": 6219
  },
  {
    "type": "Identifier",
    "value": "TestOnDefaultExportedClass_1",
    "start": 6220,
    "end": 6248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6249,
    "end": 6250
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6255,
    "end": 6260
  },
  {
    "type": "Identifier",
    "value": "StaticName",
    "start": 6261,
    "end": 6271
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6272,
    "end": 6273
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6282,
    "end": 6288
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 6289,
    "end": 6293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6293,
    "end": 6294
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6295,
    "end": 6301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6301,
    "end": 6302
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 6352,
    "end": 6356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6356,
    "end": 6357
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6358,
    "end": 6364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6364,
    "end": 6365
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6376,
    "end": 6377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6378,
    "end": 6379
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6381,
    "end": 6387
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6388,
    "end": 6393
  },
  {
    "type": "Identifier",
    "value": "ExportedStaticName",
    "start": 6394,
    "end": 6412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6413,
    "end": 6414
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6419,
    "end": 6425
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6426,
    "end": 6427
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 6427,
    "end": 6448
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6448,
    "end": 6449
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 6449,
    "end": 6453
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6453,
    "end": 6454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6454,
    "end": 6455
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6456,
    "end": 6462
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6462,
    "end": 6463
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6509,
    "end": 6510
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 6510,
    "end": 6531
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6531,
    "end": 6532
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 6532,
    "end": 6536
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6536,
    "end": 6537
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6537,
    "end": 6538
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6539,
    "end": 6545
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6545,
    "end": 6546
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6553,
    "end": 6554
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 6556,
    "end": 6565
  },
  {
    "type": "Identifier",
    "value": "TestOnDefaultExportedClass_2",
    "start": 6566,
    "end": 6594
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6595,
    "end": 6596
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6601,
    "end": 6606
  },
  {
    "type": "Identifier",
    "value": "StaticNameFn",
    "start": 6607,
    "end": 6619
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6620,
    "end": 6621
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6630,
    "end": 6636
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 6637,
    "end": 6641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6641,
    "end": 6642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6642,
    "end": 6643
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6644,
    "end": 6645
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6645,
    "end": 6646
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 6696,
    "end": 6700
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6700,
    "end": 6701
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6701,
    "end": 6702
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6703,
    "end": 6704
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6704,
    "end": 6705
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6716,
    "end": 6717
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6718,
    "end": 6719
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6721,
    "end": 6727
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6728,
    "end": 6733
  },
  {
    "type": "Identifier",
    "value": "ExportedStaticNameFn",
    "start": 6734,
    "end": 6754
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6755,
    "end": 6756
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6761,
    "end": 6767
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6768,
    "end": 6769
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 6769,
    "end": 6790
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6790,
    "end": 6791
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 6791,
    "end": 6795
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6795,
    "end": 6796
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6796,
    "end": 6797
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6797,
    "end": 6798
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6799,
    "end": 6800
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6800,
    "end": 6801
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6847,
    "end": 6848
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 6848,
    "end": 6869
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6869,
    "end": 6870
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 6870,
    "end": 6874
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6874,
    "end": 6875
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6875,
    "end": 6876
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6876,
    "end": 6877
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6878,
    "end": 6879
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6879,
    "end": 6880
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6887,
    "end": 6888
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 6900,
    "end": 6909
  },
  {
    "type": "Identifier",
    "value": "TestOnDefaultExportedClass_3",
    "start": 6910,
    "end": 6938
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6939,
    "end": 6940
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 6945,
    "end": 6951
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 6952,
    "end": 6959
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 6960,
    "end": 6965
  },
  {
    "type": "Identifier",
    "value": "StaticLength",
    "start": 6966,
    "end": 6978
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6979,
    "end": 6980
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 6989,
    "end": 6995
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 6996,
    "end": 7002
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7002,
    "end": 7003
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7004,
    "end": 7010
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7010,
    "end": 7011
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 7061,
    "end": 7067
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7067,
    "end": 7068
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7069,
    "end": 7075
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7075,
    "end": 7076
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7087,
    "end": 7088
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7089,
    "end": 7090
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7092,
    "end": 7098
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7099,
    "end": 7104
  },
  {
    "type": "Identifier",
    "value": "ExportedStaticLength",
    "start": 7105,
    "end": 7125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7126,
    "end": 7127
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 7132,
    "end": 7138
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7139,
    "end": 7140
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 7140,
    "end": 7161
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7161,
    "end": 7162
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 7162,
    "end": 7168
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7168,
    "end": 7169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7169,
    "end": 7170
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7171,
    "end": 7177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7177,
    "end": 7178
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7224,
    "end": 7225
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 7225,
    "end": 7246
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7246,
    "end": 7247
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 7247,
    "end": 7253
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7253,
    "end": 7254
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7254,
    "end": 7255
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7256,
    "end": 7262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7262,
    "end": 7263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7270,
    "end": 7271
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 7273,
    "end": 7282
  },
  {
    "type": "Identifier",
    "value": "TestOnDefaultExportedClass_4",
    "start": 7283,
    "end": 7311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7312,
    "end": 7313
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7318,
    "end": 7324
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 7325,
    "end": 7332
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7333,
    "end": 7338
  },
  {
    "type": "Identifier",
    "value": "StaticLengthFn",
    "start": 7339,
    "end": 7353
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7354,
    "end": 7355
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 7364,
    "end": 7370
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 7371,
    "end": 7377
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7377,
    "end": 7378
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7378,
    "end": 7379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7380,
    "end": 7381
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7381,
    "end": 7382
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 7432,
    "end": 7438
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7438,
    "end": 7439
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7439,
    "end": 7440
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7441,
    "end": 7442
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7442,
    "end": 7443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7454,
    "end": 7455
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7456,
    "end": 7457
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7459,
    "end": 7465
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7466,
    "end": 7471
  },
  {
    "type": "Identifier",
    "value": "ExportedStaticLengthFn",
    "start": 7472,
    "end": 7494
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7495,
    "end": 7496
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 7501,
    "end": 7507
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7508,
    "end": 7509
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 7509,
    "end": 7530
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7530,
    "end": 7531
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 7531,
    "end": 7537
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7537,
    "end": 7538
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7538,
    "end": 7539
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7539,
    "end": 7540
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7541,
    "end": 7542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7542,
    "end": 7543
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7589,
    "end": 7590
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 7590,
    "end": 7611
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7611,
    "end": 7612
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 7612,
    "end": 7618
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7618,
    "end": 7619
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7619,
    "end": 7620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7620,
    "end": 7621
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7622,
    "end": 7623
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7623,
    "end": 7624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7631,
    "end": 7632
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 7647,
    "end": 7656
  },
  {
    "type": "Identifier",
    "value": "TestOnDefaultExportedClass_5",
    "start": 7657,
    "end": 7685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7686,
    "end": 7687
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7692,
    "end": 7698
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 7699,
    "end": 7706
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7707,
    "end": 7712
  },
  {
    "type": "Identifier",
    "value": "StaticPrototype",
    "start": 7713,
    "end": 7728
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7729,
    "end": 7730
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 7739,
    "end": 7745
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 7746,
    "end": 7755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7755,
    "end": 7756
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7757,
    "end": 7763
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7763,
    "end": 7764
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 7792,
    "end": 7801
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7801,
    "end": 7802
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7803,
    "end": 7809
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7809,
    "end": 7810
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7821,
    "end": 7822
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7823,
    "end": 7824
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 7826,
    "end": 7832
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7833,
    "end": 7838
  },
  {
    "type": "Identifier",
    "value": "ExportedStaticPrototype",
    "start": 7839,
    "end": 7862
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7863,
    "end": 7864
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 7869,
    "end": 7875
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7876,
    "end": 7877
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 7877,
    "end": 7898
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7898,
    "end": 7899
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 7899,
    "end": 7908
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7908,
    "end": 7909
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7909,
    "end": 7910
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7911,
    "end": 7917
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7917,
    "end": 7918
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7942,
    "end": 7943
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 7943,
    "end": 7964
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 7964,
    "end": 7965
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 7965,
    "end": 7974
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7974,
    "end": 7975
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7975,
    "end": 7976
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7977,
    "end": 7983
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7983,
    "end": 7984
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7991,
    "end": 7992
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 7994,
    "end": 8003
  },
  {
    "type": "Identifier",
    "value": "TestOnDefaultExportedClass_6",
    "start": 8004,
    "end": 8032
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8033,
    "end": 8034
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8039,
    "end": 8045
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 8046,
    "end": 8053
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8054,
    "end": 8059
  },
  {
    "type": "Identifier",
    "value": "StaticPrototypeFn",
    "start": 8060,
    "end": 8077
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8078,
    "end": 8079
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 8088,
    "end": 8094
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 8095,
    "end": 8104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8104,
    "end": 8105
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8105,
    "end": 8106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8107,
    "end": 8108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8108,
    "end": 8109
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 8137,
    "end": 8146
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8146,
    "end": 8147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8147,
    "end": 8148
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8149,
    "end": 8150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8150,
    "end": 8151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8162,
    "end": 8163
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8164,
    "end": 8165
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8167,
    "end": 8173
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8174,
    "end": 8179
  },
  {
    "type": "Identifier",
    "value": "ExportedStaticPrototypeFn",
    "start": 8180,
    "end": 8205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8206,
    "end": 8207
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 8212,
    "end": 8218
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8219,
    "end": 8220
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 8220,
    "end": 8241
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8241,
    "end": 8242
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 8242,
    "end": 8251
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8251,
    "end": 8252
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8252,
    "end": 8253
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8253,
    "end": 8254
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8255,
    "end": 8256
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8256,
    "end": 8257
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8281,
    "end": 8282
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 8282,
    "end": 8303
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8303,
    "end": 8304
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 8304,
    "end": 8313
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8313,
    "end": 8314
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8314,
    "end": 8315
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8315,
    "end": 8316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8317,
    "end": 8318
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8318,
    "end": 8319
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8326,
    "end": 8327
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 8339,
    "end": 8348
  },
  {
    "type": "Identifier",
    "value": "TestOnDefaultExportedClass_7",
    "start": 8349,
    "end": 8377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8378,
    "end": 8379
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8384,
    "end": 8390
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 8391,
    "end": 8398
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8399,
    "end": 8404
  },
  {
    "type": "Identifier",
    "value": "StaticCaller",
    "start": 8405,
    "end": 8417
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8418,
    "end": 8419
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 8428,
    "end": 8434
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 8435,
    "end": 8441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8441,
    "end": 8442
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8443,
    "end": 8449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8449,
    "end": 8450
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 8500,
    "end": 8506
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8506,
    "end": 8507
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8508,
    "end": 8514
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8514,
    "end": 8515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8526,
    "end": 8527
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8528,
    "end": 8529
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8531,
    "end": 8537
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8538,
    "end": 8543
  },
  {
    "type": "Identifier",
    "value": "ExportedStaticCaller",
    "start": 8544,
    "end": 8564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8565,
    "end": 8566
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 8571,
    "end": 8577
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8578,
    "end": 8579
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 8579,
    "end": 8600
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8600,
    "end": 8601
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 8601,
    "end": 8607
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8607,
    "end": 8608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8608,
    "end": 8609
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8610,
    "end": 8616
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8616,
    "end": 8617
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8663,
    "end": 8664
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 8664,
    "end": 8685
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8685,
    "end": 8686
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 8686,
    "end": 8692
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8692,
    "end": 8693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8693,
    "end": 8694
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8695,
    "end": 8701
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8701,
    "end": 8702
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8709,
    "end": 8710
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 8712,
    "end": 8721
  },
  {
    "type": "Identifier",
    "value": "TestOnDefaultExportedClass_8",
    "start": 8722,
    "end": 8750
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8751,
    "end": 8752
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8757,
    "end": 8763
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 8764,
    "end": 8771
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8772,
    "end": 8777
  },
  {
    "type": "Identifier",
    "value": "StaticCallerFn",
    "start": 8778,
    "end": 8792
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8793,
    "end": 8794
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 8803,
    "end": 8809
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 8810,
    "end": 8816
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8816,
    "end": 8817
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8817,
    "end": 8818
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8819,
    "end": 8820
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8820,
    "end": 8821
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 8871,
    "end": 8877
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8877,
    "end": 8878
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8878,
    "end": 8879
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8880,
    "end": 8881
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8881,
    "end": 8882
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8893,
    "end": 8894
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8895,
    "end": 8896
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 8898,
    "end": 8904
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8905,
    "end": 8910
  },
  {
    "type": "Identifier",
    "value": "ExportedStaticCallerFn",
    "start": 8911,
    "end": 8933
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8934,
    "end": 8935
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 8940,
    "end": 8946
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8947,
    "end": 8948
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 8948,
    "end": 8969
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8969,
    "end": 8970
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 8970,
    "end": 8976
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8976,
    "end": 8977
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8977,
    "end": 8978
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8978,
    "end": 8979
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8980,
    "end": 8981
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8981,
    "end": 8982
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9028,
    "end": 9029
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 9029,
    "end": 9050
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9050,
    "end": 9051
  },
  {
    "type": "Identifier",
    "value": "caller",
    "start": 9051,
    "end": 9057
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9057,
    "end": 9058
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9058,
    "end": 9059
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9059,
    "end": 9060
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9061,
    "end": 9062
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9062,
    "end": 9063
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9070,
    "end": 9071
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 9086,
    "end": 9095
  },
  {
    "type": "Identifier",
    "value": "TestOnDefaultExportedClass_9",
    "start": 9096,
    "end": 9124
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9125,
    "end": 9126
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9131,
    "end": 9137
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 9138,
    "end": 9145
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 9146,
    "end": 9151
  },
  {
    "type": "Identifier",
    "value": "StaticArguments",
    "start": 9152,
    "end": 9167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9168,
    "end": 9169
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 9178,
    "end": 9184
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 9185,
    "end": 9194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9194,
    "end": 9195
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9196,
    "end": 9202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9202,
    "end": 9203
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 9253,
    "end": 9262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9262,
    "end": 9263
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9264,
    "end": 9270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9270,
    "end": 9271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9282,
    "end": 9283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9284,
    "end": 9285
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9287,
    "end": 9293
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 9294,
    "end": 9299
  },
  {
    "type": "Identifier",
    "value": "ExportedStaticArguments",
    "start": 9300,
    "end": 9323
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9324,
    "end": 9325
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 9330,
    "end": 9336
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9337,
    "end": 9338
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 9338,
    "end": 9359
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9359,
    "end": 9360
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 9360,
    "end": 9369
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9369,
    "end": 9370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9370,
    "end": 9371
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9372,
    "end": 9378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9378,
    "end": 9379
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9425,
    "end": 9426
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 9426,
    "end": 9447
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9447,
    "end": 9448
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 9448,
    "end": 9457
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9457,
    "end": 9458
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9458,
    "end": 9459
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9460,
    "end": 9466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9466,
    "end": 9467
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9474,
    "end": 9475
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 9477,
    "end": 9486
  },
  {
    "type": "Identifier",
    "value": "TestOnDefaultExportedClass_10",
    "start": 9487,
    "end": 9516
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9517,
    "end": 9518
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9523,
    "end": 9529
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 9530,
    "end": 9537
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 9538,
    "end": 9543
  },
  {
    "type": "Identifier",
    "value": "StaticArgumentsFn",
    "start": 9544,
    "end": 9561
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9562,
    "end": 9563
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 9572,
    "end": 9578
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 9579,
    "end": 9588
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9588,
    "end": 9589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9589,
    "end": 9590
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9591,
    "end": 9592
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9592,
    "end": 9593
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 9643,
    "end": 9652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9652,
    "end": 9653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9653,
    "end": 9654
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9655,
    "end": 9656
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9656,
    "end": 9657
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9668,
    "end": 9669
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9670,
    "end": 9671
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 9673,
    "end": 9679
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 9680,
    "end": 9685
  },
  {
    "type": "Identifier",
    "value": "ExportedStaticArgumentsFn",
    "start": 9686,
    "end": 9711
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9712,
    "end": 9713
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 9718,
    "end": 9724
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9725,
    "end": 9726
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 9726,
    "end": 9747
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9747,
    "end": 9748
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 9748,
    "end": 9757
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9757,
    "end": 9758
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9758,
    "end": 9759
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9759,
    "end": 9760
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9761,
    "end": 9762
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9762,
    "end": 9763
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9809,
    "end": 9810
  },
  {
    "type": "Identifier",
    "value": "FunctionPropertyNames",
    "start": 9810,
    "end": 9831
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9831,
    "end": 9832
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 9832,
    "end": 9841
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9841,
    "end": 9842
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9842,
    "end": 9843
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9843,
    "end": 9844
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9845,
    "end": 9846
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9846,
    "end": 9847
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9854,
    "end": 9855
  }
]
```
