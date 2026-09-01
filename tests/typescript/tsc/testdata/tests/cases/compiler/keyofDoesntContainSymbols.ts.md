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
            "name": "sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 18
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 12,
            "end": 20
          },
          "definite": false,
          "start": 6,
          "end": 20
        }
      ],
      "declare": false,
      "start": 0,
      "end": 21
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 31
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 34,
            "end": 35
          },
          "definite": false,
          "start": 28,
          "end": 35
        }
      ],
      "declare": false,
      "start": 22,
      "end": 36
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 43,
            "end": 46
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
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 51,
                  "end": 54
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 56,
                  "end": 57
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 51,
                "end": 57
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "str",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 62
                },
                "value": {
                  "type": "Literal",
                  "value": "s",
                  "raw": "'s'",
                  "start": 64,
                  "end": 67
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 59,
                "end": 67
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 73
                },
                "value": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 79
                  },
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 83,
                      "end": 84
                    },
                    "start": 83,
                    "end": 84
                  },
                  "start": 76,
                  "end": 84
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 69,
                "end": 84
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 90
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 93,
                  "end": 96
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 86,
                "end": 96
              }
            ],
            "start": 49,
            "end": 98
          },
          "definite": false,
          "start": 43,
          "end": 98
        }
      ],
      "declare": false,
      "start": 37,
      "end": 99
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "set",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 113
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 116
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 125,
              "end": 131
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 115,
            "end": 131
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 134
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 149,
                  "end": 150
                },
                "typeArguments": null,
                "start": 149,
                "end": 150
              },
              "start": 143,
              "end": 150
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 133,
            "end": 150
          }
        ],
        "start": 114,
        "end": 151
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 159
              },
              "typeArguments": null,
              "start": 158,
              "end": 159
            },
            "start": 156,
            "end": 159
          },
          "start": 153,
          "end": 159
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 167
              },
              "typeArguments": null,
              "start": 166,
              "end": 167
            },
            "start": 164,
            "end": 167
          },
          "start": 161,
          "end": 167
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 177
                },
                "typeArguments": null,
                "start": 176,
                "end": 177
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 179
                },
                "typeArguments": null,
                "start": 178,
                "end": 179
              },
              "start": 176,
              "end": 180
            },
            "start": 174,
            "end": 180
          },
          "start": 169,
          "end": 180
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 184
            },
            "typeArguments": null,
            "start": 183,
            "end": 184
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 186
            },
            "typeArguments": null,
            "start": 185,
            "end": 186
          },
          "start": 183,
          "end": 187
        },
        "start": 181,
        "end": 187
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 202
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 206
                },
                "optional": false,
                "computed": true,
                "start": 199,
                "end": 207
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 215
              },
              "start": 199,
              "end": 215
            },
            "start": 192,
            "end": 216
          }
        ],
        "start": 188,
        "end": 218
      },
      "expression": false,
      "start": 101,
      "end": 218
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "val",
            "optional": false,
            "typeAnnotation": null,
            "start": 226,
            "end": 229
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 235
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 236,
                "end": 239
              },
              {
                "type": "Literal",
                "value": "str",
                "raw": "'str'",
                "start": 241,
                "end": 246
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 248,
                "end": 250
              }
            ],
            "optional": false,
            "start": 232,
            "end": 251
          },
          "definite": false,
          "start": 226,
          "end": 251
        }
      ],
      "declare": false,
      "start": 220,
      "end": 252
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "valB",
            "optional": false,
            "typeAnnotation": null,
            "start": 269,
            "end": 273
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 279
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 280,
                "end": 283
              },
              {
                "type": "Literal",
                "value": "num",
                "raw": "'num'",
                "start": 285,
                "end": 290
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 292,
                "end": 294
              }
            ],
            "optional": false,
            "start": 276,
            "end": 295
          },
          "definite": false,
          "start": 269,
          "end": 295
        }
      ],
      "declare": false,
      "start": 263,
      "end": 296
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "valC",
            "optional": false,
            "typeAnnotation": null,
            "start": 398,
            "end": 402
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 408
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 412
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sym",
                "optional": false,
                "typeAnnotation": null,
                "start": 414,
                "end": 417
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "sym",
                "optional": false,
                "typeAnnotation": null,
                "start": 419,
                "end": 422
              }
            ],
            "optional": false,
            "start": 405,
            "end": 423
          },
          "definite": false,
          "start": 398,
          "end": 423
        }
      ],
      "declare": false,
      "start": 392,
      "end": 424
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "valD",
            "optional": false,
            "typeAnnotation": null,
            "start": 541,
            "end": 545
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 548,
              "end": 551
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 552,
                "end": 555
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 557,
                "end": 560
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "num",
                "optional": false,
                "typeAnnotation": null,
                "start": 562,
                "end": 565
              }
            ],
            "optional": false,
            "start": 548,
            "end": 566
          },
          "definite": false,
          "start": 541,
          "end": 566
        }
      ],
      "declare": false,
      "start": 535,
      "end": 567
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KeyofObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 671,
        "end": 679
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "exprName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 695,
            "end": 698
          },
          "typeArguments": null,
          "start": 688,
          "end": 698
        },
        "start": 682,
        "end": 698
      },
      "declare": false,
      "start": 666,
      "end": 699
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Values",
        "optional": false,
        "typeAnnotation": null,
        "start": 722,
        "end": 728
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 729,
              "end": 730
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 729,
            "end": 730
          }
        ],
        "start": 728,
        "end": 731
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "objectType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 734,
            "end": 735
          },
          "typeArguments": null,
          "start": 734,
          "end": 735
        },
        "indexType": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 742,
              "end": 743
            },
            "typeArguments": null,
            "start": 742,
            "end": 743
          },
          "start": 736,
          "end": 743
        },
        "start": 734,
        "end": 744
      },
      "declare": false,
      "start": 717,
      "end": 745
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ValuesOfObj",
        "optional": false,
        "typeAnnotation": null,
        "start": 752,
        "end": 763
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Values",
          "optional": false,
          "typeAnnotation": null,
          "start": 766,
          "end": 772
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 780,
                "end": 783
              },
              "typeArguments": null,
              "start": 773,
              "end": 783
            }
          ],
          "start": 772,
          "end": 784
        },
        "start": 766,
        "end": 784
      },
      "declare": false,
      "start": 747,
      "end": 785
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 785
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
    "value": "sym",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 12,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 22,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 28,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 37,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 43,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 51,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 59,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "String",
    "value": "'s'",
    "start": 64,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 70,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 76,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 80,
    "end": 82
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 101,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 110,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 117,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 135,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 143,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 153,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 161,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 169,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 186,
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
    "value": "return",
    "start": 192,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 199,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 203,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 210,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 220,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 226,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 230,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 232,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 236,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 239,
    "end": 240
  },
  {
    "type": "String",
    "value": "'str'",
    "start": 241,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 246,
    "end": 247
  },
  {
    "type": "String",
    "value": "''",
    "start": 248,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 263,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "valB",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 276,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 280,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 283,
    "end": 284
  },
  {
    "type": "String",
    "value": "'num'",
    "start": 285,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 290,
    "end": 291
  },
  {
    "type": "String",
    "value": "''",
    "start": 292,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 392,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "valC",
    "start": 398,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 405,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 409,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 412,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 414,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 419,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 535,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "valD",
    "start": 541,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 548,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 552,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 555,
    "end": 556
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 557,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "num",
    "start": 562,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 666,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "KeyofObj",
    "start": 671,
    "end": 679
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 680,
    "end": 681
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 682,
    "end": 687
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 688,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 695,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 698,
    "end": 699
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 717,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 722,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 728,
    "end": 729
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 736,
    "end": 741
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 742,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
    "end": 745
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 747,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "ValuesOfObj",
    "start": 752,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 764,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "Values",
    "start": 766,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 772,
    "end": 773
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 773,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 780,
    "end": 783
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 783,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 784,
    "end": 785
  }
]
```
