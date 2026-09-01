__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumList",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 17
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 26
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "n",
                  "raw": "'n'",
                  "start": 28,
                  "end": 31
                },
                "start": 28,
                "end": 31
              },
              "start": 26,
              "end": 31
            },
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 32
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 39,
                    "end": 45
                  },
                  "start": 37,
                  "end": 45
                },
                "start": 36,
                "end": 45
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 48,
                "end": 54
              },
              "start": 46,
              "end": 54
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 35,
            "end": 55
          }
        ],
        "start": 18,
        "end": 57
      },
      "declare": false,
      "start": 0,
      "end": 57
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrList",
        "optional": false,
        "typeAnnotation": null,
        "start": 68,
        "end": 75
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 84
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "s",
                  "raw": "'s'",
                  "start": 86,
                  "end": 89
                },
                "start": 86,
                "end": 89
              },
              "start": 84,
              "end": 89
            },
            "accessibility": null,
            "static": false,
            "start": 80,
            "end": 90
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 97,
                    "end": 103
                  },
                  "start": 95,
                  "end": 103
                },
                "start": 94,
                "end": 103
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 106,
                "end": 112
              },
              "start": 104,
              "end": 112
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 93,
            "end": 113
          }
        ],
        "start": 76,
        "end": 115
      },
      "declare": false,
      "start": 58,
      "end": 115
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 133,
          "end": 136
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
                "start": 137,
                "end": 138
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NumList",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 147,
                      "end": 154
                    },
                    "typeArguments": null,
                    "start": 147,
                    "end": 154
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "StrList",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 157,
                      "end": 164
                    },
                    "typeArguments": null,
                    "start": 157,
                    "end": 164
                  }
                ],
                "start": 147,
                "end": 164
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 137,
              "end": 164
            }
          ],
          "start": 136,
          "end": 165
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 171,
                      "end": 172
                    },
                    "typeArguments": null,
                    "start": 171,
                    "end": 172
                  },
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NumList",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 176,
                          "end": 183
                        },
                        "typeArguments": null,
                        "start": 176,
                        "end": 183
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "StrList",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 186,
                          "end": 193
                        },
                        "typeArguments": null,
                        "start": 186,
                        "end": 193
                      }
                    ],
                    "start": 176,
                    "end": 193
                  }
                ],
                "start": 171,
                "end": 194
              },
              "start": 169,
              "end": 194
            },
            "start": 166,
            "end": 194
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "zz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 204,
                    "end": 206
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 209,
                      "end": 212
                    },
                    "property": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 213,
                      "end": 214
                    },
                    "optional": false,
                    "computed": true,
                    "start": 209,
                    "end": 215
                  },
                  "definite": false,
                  "start": 204,
                  "end": 215
                }
              ],
              "declare": false,
              "start": 200,
              "end": 216
            }
          ],
          "start": 196,
          "end": 228
        },
        "expression": false,
        "start": 124,
        "end": 228
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 117,
      "end": 228
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypedArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 264,
          "end": 274
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Int32Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 277,
                "end": 287
              },
              "typeArguments": null,
              "start": 277,
              "end": 287
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Uint8Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 300
              },
              "typeArguments": null,
              "start": 290,
              "end": 300
            }
          ],
          "start": 277,
          "end": 300
        },
        "declare": false,
        "start": 259,
        "end": 301
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 252,
      "end": 301
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "isTypedArray",
          "optional": false,
          "typeAnnotation": null,
          "start": 319,
          "end": 331
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 335,
                "end": 337
              },
              "start": 333,
              "end": 337
            },
            "start": 332,
            "end": 337
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypePredicate",
            "parameterName": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 341
            },
            "asserts": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Int32Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 355
                    },
                    "typeArguments": null,
                    "start": 345,
                    "end": 355
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Uint8Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 358,
                      "end": 368
                    },
                    "typeArguments": null,
                    "start": 358,
                    "end": 368
                  }
                ],
                "start": 345,
                "end": 368
              },
              "start": 345,
              "end": 368
            },
            "start": 340,
            "end": 368
          },
          "start": 338,
          "end": 368
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 380,
                    "end": 381
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Int32Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 393,
                    "end": 403
                  },
                  "start": 380,
                  "end": 403
                },
                "operator": "||",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 407,
                    "end": 408
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Uint8Array",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 420,
                    "end": 430
                  },
                  "start": 407,
                  "end": 430
                },
                "start": 380,
                "end": 430
              },
              "start": 373,
              "end": 431
            }
          ],
          "start": 369,
          "end": 433
        },
        "expression": false,
        "start": 310,
        "end": 433
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 303,
      "end": 433
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "flatten",
          "optional": false,
          "typeAnnotation": null,
          "start": 451,
          "end": 458
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
                "start": 459,
                "end": 460
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 469,
                    "end": 475
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TypedArray",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 476,
                      "end": 486
                    },
                    "typeArguments": null,
                    "start": 476,
                    "end": 486
                  }
                ],
                "start": 469,
                "end": 486
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 459,
              "end": 486
            }
          ],
          "start": 458,
          "end": 487
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arr",
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
                  "start": 493,
                  "end": 494
                },
                "typeArguments": null,
                "start": 493,
                "end": 494
              },
              "start": 491,
              "end": 494
            },
            "start": 488,
            "end": 494
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isTypedArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 504,
                  "end": 516
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arr",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 517,
                    "end": 520
                  }
                ],
                "optional": false,
                "start": 504,
                "end": 521
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arr",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 531,
                        "end": 534
                      },
                      "property": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 535,
                        "end": 536
                      },
                      "optional": false,
                      "computed": true,
                      "start": 531,
                      "end": 537
                    },
                    "directive": null,
                    "start": 531,
                    "end": 538
                  }
                ],
                "start": 523,
                "end": 542
              },
              "alternate": null,
              "start": 500,
              "end": 542
            }
          ],
          "start": 496,
          "end": 544
        },
        "expression": false,
        "start": 442,
        "end": 544
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 435,
      "end": 544
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 544
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "NumList",
    "start": 10,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 22,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "String",
    "value": "'n'",
    "start": 28,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 56,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 58,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "StrList",
    "start": 68,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 80,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "String",
    "value": "'s'",
    "start": 86,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 97,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 117,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 124,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 133,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 139,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "NumList",
    "start": 147,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "StrList",
    "start": 157,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 166,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "NumList",
    "start": 176,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "StrList",
    "start": 186,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 200,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "zz",
    "start": 204,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 209,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 212,
    "end": 213
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 214,
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
    "start": 227,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 252,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 259,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "TypedArray",
    "start": 264,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "Int32Array",
    "start": 277,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "Uint8Array",
    "start": 290,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 303,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 310,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "isTypedArray",
    "start": 319,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 337,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 340,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 342,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "Int32Array",
    "start": 345,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "Uint8Array",
    "start": 358,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 369,
    "end": 370
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 373,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 382,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "Int32Array",
    "start": 393,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 404,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 407,
    "end": 408
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 409,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "Uint8Array",
    "start": 420,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 432,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 435,
    "end": 441
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 442,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "flatten",
    "start": 451,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 459,
    "end": 460
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 461,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 469,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "TypedArray",
    "start": 476,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 488,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 500,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "isTypedArray",
    "start": 504,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 517,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 523,
    "end": 524
  },
  {
    "type": "Identifier",
    "value": "arr",
    "start": 531,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 534,
    "end": 535
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 535,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 537,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 541,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 543,
    "end": 544
  }
]
```
