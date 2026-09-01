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
            "name": "something",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 64
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 84,
            "end": 88
          },
          "definite": false,
          "start": 55,
          "end": 89
        }
      ],
      "declare": false,
      "start": 49,
      "end": 90
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "vLet",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 107
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 136
            },
            "definite": false,
            "start": 103,
            "end": 137
          }
        ],
        "declare": false,
        "start": 99,
        "end": 138
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 92,
      "end": 138
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
              "name": "vConst",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 158
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 187
            },
            "definite": false,
            "start": 152,
            "end": 188
          }
        ],
        "declare": false,
        "start": 146,
        "end": 189
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 139,
      "end": 189
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 207,
          "end": 209
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 211
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 240
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 210,
            "end": 241
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 243,
          "end": 245
        },
        "expression": false,
        "start": 198,
        "end": 245
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 191,
      "end": 245
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fnWithRequiredDefaultParam",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 316
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 318
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 347
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 317,
            "end": 348
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "req",
            "optional": false,
            "typeAnnotation": null,
            "start": 350,
            "end": 353
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 355,
          "end": 357
        },
        "expression": false,
        "start": 281,
        "end": 357
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 274,
      "end": 357
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 372,
          "end": 373
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
                "name": "field",
                "optional": false,
                "typeAnnotation": null,
                "start": 380,
                "end": 385
              },
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "something",
                "optional": false,
                "typeAnnotation": null,
                "start": 405,
                "end": 414
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 380,
              "end": 416
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "optField",
                "optional": false,
                "typeAnnotation": null,
                "start": 438,
                "end": 446
              },
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "something",
                "optional": false,
                "typeAnnotation": null,
                "start": 466,
                "end": 475
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 438,
              "end": 477
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "roFiled",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 521
              },
              "typeAnnotation": null,
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "something",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 550
              },
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 514,
              "end": 552
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 557,
                "end": 563
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 564,
                      "end": 565
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 585,
                      "end": 594
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 564,
                    "end": 595
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 597,
                  "end": 599
                },
                "expression": false,
                "start": 563,
                "end": 599
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 557,
              "end": 599
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "methodWithRequiredDefault",
                "optional": false,
                "typeAnnotation": null,
                "start": 635,
                "end": 660
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 661,
                      "end": 662
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 682,
                      "end": 691
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 661,
                    "end": 692
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "req",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 694,
                    "end": 697
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 699,
                  "end": 701
                },
                "expression": false,
                "start": 660,
                "end": 701
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 635,
              "end": 701
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 707,
                "end": 718
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ctorField",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 719,
                      "end": 728
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 748,
                      "end": 757
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 719,
                    "end": 758
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 760,
                  "end": 762
                },
                "expression": false,
                "start": 718,
                "end": 762
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 707,
              "end": 762
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 772,
                "end": 773
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
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "something",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 802,
                        "end": 811
                      },
                      "start": 778,
                      "end": 812
                    }
                  ],
                  "start": 776,
                  "end": 814
                },
                "expression": false,
                "start": 773,
                "end": 814
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 768,
              "end": 814
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 823,
                "end": 824
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 825,
                    "end": 826
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 828,
                  "end": 831
                },
                "expression": false,
                "start": 824,
                "end": 831
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 819,
              "end": 831
            }
          ],
          "start": 374,
          "end": 833
        },
        "abstract": false,
        "declare": false,
        "start": 366,
        "end": 833
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 359,
      "end": 833
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "something",
        "optional": false,
        "typeAnnotation": null,
        "start": 867,
        "end": 876
      },
      "exportKind": "value",
      "start": 835,
      "end": 878
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "fnWithPartialAnnotationOnDefaultparam",
          "optional": false,
          "typeAnnotation": null,
          "start": 1012,
          "end": 1049
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "AssignmentPattern",
            "decorators": [],
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1050,
              "end": 1051
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null,
              "start": 1071,
              "end": 1080
            },
            "optional": false,
            "typeAnnotation": null,
            "start": 1050,
            "end": 1081
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1083,
            "end": 1084
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 1086,
          "end": 1088
        },
        "expression": false,
        "start": 1003,
        "end": 1088
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 996,
      "end": 1088
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 49,
  "end": 1088
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 49,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 55,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84
  },
  {
    "type": "Null",
    "value": "null",
    "start": 84,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 92,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 99,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "vLet",
    "start": 103,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 127,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 139,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 146,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "vConst",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 178,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 188,
    "end": 189
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 191,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 198,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 207,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 231,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 274,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 281,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "fnWithRequiredDefaultParam",
    "start": 290,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 338,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 350,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 353,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 359,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 366,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 380,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 405,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "optField",
    "start": 438,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 466,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "roFiled",
    "start": 514,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 522,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 541,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 557,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 566,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 585,
    "end": 594
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 595,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "methodWithRequiredDefault",
    "start": 635,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 660,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 661,
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
    "value": "(",
    "start": 681,
    "end": 682
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 682,
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
    "value": ",",
    "start": 692,
    "end": 693
  },
  {
    "type": "Identifier",
    "value": "req",
    "start": 694,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 707,
    "end": 718
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "ctorField",
    "start": 719,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 748,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 758,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 760,
    "end": 761
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 761,
    "end": 762
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 768,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 776,
    "end": 777
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 778,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 801,
    "end": 802
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 802,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 811,
    "end": 812
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 813,
    "end": 814
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 819,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 823,
    "end": 824
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 826,
    "end": 827
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 832,
    "end": 833
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 835,
    "end": 841
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 842,
    "end": 849
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 866,
    "end": 867
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 867,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 877,
    "end": 878
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 996,
    "end": 1002
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1003,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "fnWithPartialAnnotationOnDefaultparam",
    "start": 1012,
    "end": 1049
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 1071,
    "end": 1080
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1080,
    "end": 1081
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1086,
    "end": 1087
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1087,
    "end": 1088
  }
]
```
