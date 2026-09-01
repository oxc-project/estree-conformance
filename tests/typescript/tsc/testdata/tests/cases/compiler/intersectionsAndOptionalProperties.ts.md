__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 17,
                      "end": 18
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 21,
                        "end": 27
                      },
                      "start": 19,
                      "end": 27
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 17,
                    "end": 28
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 29,
                      "end": 30
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 32,
                        "end": 38
                      },
                      "start": 30,
                      "end": 38
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 29,
                    "end": 38
                  }
                ],
                "start": 15,
                "end": 40
              },
              "start": 13,
              "end": 40
            },
            "start": 12,
            "end": 40
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 40
        }
      ],
      "declare": true,
      "start": 0,
      "end": 41
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 59,
                      "end": 60
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNullKeyword",
                        "start": 62,
                        "end": 66
                      },
                      "start": 60,
                      "end": 66
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 59,
                    "end": 67
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 68,
                      "end": 69
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 71,
                        "end": 77
                      },
                      "start": 69,
                      "end": 77
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 68,
                    "end": 77
                  }
                ],
                "start": 57,
                "end": 79
              },
              "start": 55,
              "end": 79
            },
            "start": 54,
            "end": 79
          },
          "init": null,
          "definite": false,
          "start": 54,
          "end": 79
        }
      ],
      "declare": true,
      "start": 42,
      "end": 80
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 98,
                          "end": 99
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNullKeyword",
                            "start": 101,
                            "end": 105
                          },
                          "start": 99,
                          "end": 105
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 98,
                        "end": 105
                      }
                    ],
                    "start": 96,
                    "end": 107
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 112,
                          "end": 113
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 115,
                            "end": 121
                          },
                          "start": 113,
                          "end": 121
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 112,
                        "end": 121
                      }
                    ],
                    "start": 110,
                    "end": 123
                  }
                ],
                "start": 96,
                "end": 123
              },
              "start": 94,
              "end": 123
            },
            "start": 93,
            "end": 123
          },
          "init": null,
          "definite": false,
          "start": 93,
          "end": 123
        }
      ],
      "declare": true,
      "start": 81,
      "end": 124
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 126,
          "end": 127
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 130,
          "end": 131
        },
        "start": 126,
        "end": 131
      },
      "directive": null,
      "start": 126,
      "end": 132
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 143,
          "end": 144
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 147,
          "end": 148
        },
        "start": 143,
        "end": 148
      },
      "directive": null,
      "start": 143,
      "end": 149
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "To",
        "optional": false,
        "typeAnnotation": null,
        "start": 193,
        "end": 195
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "field",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 207
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 210,
                "end": 216
              },
              "start": 208,
              "end": 216
            },
            "accessibility": null,
            "static": false,
            "start": 202,
            "end": 217
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "anotherField",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 234
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 236,
                "end": 242
              },
              "start": 234,
              "end": 242
            },
            "accessibility": null,
            "static": false,
            "start": 222,
            "end": 243
          }
        ],
        "start": 196,
        "end": 245
      },
      "declare": false,
      "start": 183,
      "end": 245
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "From",
        "optional": false,
        "typeAnnotation": null,
        "start": 252,
        "end": 256
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "field",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 262,
                  "end": 267
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 269,
                    "end": 273
                  },
                  "start": 267,
                  "end": 273
                },
                "accessibility": null,
                "static": false,
                "start": 262,
                "end": 273
              }
            ],
            "start": 260,
            "end": 275
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Omit",
              "optional": false,
              "typeAnnotation": null,
              "start": 278,
              "end": 282
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "To",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 283,
                    "end": 285
                  },
                  "typeArguments": null,
                  "start": 283,
                  "end": 285
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "field",
                    "raw": "'field'",
                    "start": 287,
                    "end": 294
                  },
                  "start": 287,
                  "end": 294
                }
              ],
              "start": 282,
              "end": 295
            },
            "start": 278,
            "end": 295
          }
        ],
        "start": 260,
        "end": 295
      },
      "declare": false,
      "start": 247,
      "end": 296
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 307,
        "end": 310
      },
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "From",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 318
              },
              "typeArguments": null,
              "start": 314,
              "end": 318
            },
            "start": 312,
            "end": 318
          },
          "start": 311,
          "end": 318
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "To",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 333,
                        "end": 335
                      },
                      "typeArguments": null,
                      "start": 333,
                      "end": 335
                    },
                    "start": 331,
                    "end": 335
                  },
                  "start": 330,
                  "end": 335
                },
                "init": null,
                "definite": false,
                "start": 330,
                "end": 335
              }
            ],
            "declare": false,
            "start": 326,
            "end": 336
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 342
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 346
              },
              "start": 341,
              "end": 346
            },
            "directive": null,
            "start": 341,
            "end": 347
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 362,
                  "end": 363
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "field",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 369
                },
                "optional": false,
                "computed": false,
                "start": 362,
                "end": 369
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 373
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "field",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 379
                },
                "optional": false,
                "computed": false,
                "start": 372,
                "end": 379
              },
              "start": 362,
              "end": 379
            },
            "directive": null,
            "start": 362,
            "end": 380
          }
        ],
        "start": 320,
        "end": 391
      },
      "expression": false,
      "start": 298,
      "end": 391
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
            "name": "yy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 425,
                      "end": 431
                    },
                    "start": 425,
                    "end": 433
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 437,
                        "end": 443
                      },
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSNumberKeyword",
                            "start": 448,
                            "end": 454
                          },
                          "start": 448,
                          "end": 456
                        },
                        "start": 445,
                        "end": 456
                      }
                    ],
                    "start": 436,
                    "end": 457
                  }
                ],
                "start": 425,
                "end": 457
              },
              "start": 423,
              "end": 457
            },
            "start": 421,
            "end": 457
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 461,
                "end": 462
              }
            ],
            "start": 460,
            "end": 463
          },
          "definite": false,
          "start": 421,
          "end": 463
        }
      ],
      "declare": false,
      "start": 415,
      "end": 464
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
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 476,
                    "end": 482
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 487,
                        "end": 493
                      },
                      "start": 487,
                      "end": 495
                    },
                    "start": 484,
                    "end": 495
                  }
                ],
                "start": 475,
                "end": 496
              },
              "start": 473,
              "end": 496
            },
            "start": 471,
            "end": 496
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "yy",
            "optional": false,
            "typeAnnotation": null,
            "start": 499,
            "end": 501
          },
          "definite": false,
          "start": 471,
          "end": 501
        }
      ],
      "declare": false,
      "start": 465,
      "end": 502
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 502
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 42,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 50,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61
  },
  {
    "type": "Null",
    "value": "null",
    "start": 62,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 71,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 81,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 89,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100
  },
  {
    "type": "Null",
    "value": "null",
    "start": 101,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 115,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 183,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "To",
    "start": 193,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 202,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 210,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "anotherField",
    "start": 222,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 236,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 247,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "From",
    "start": 252,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 262,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Null",
    "value": "null",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "Omit",
    "start": 278,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "To",
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
    "type": "String",
    "value": "'field'",
    "start": 287,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "function",
    "start": 298,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 307,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "From",
    "start": 314,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 326,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "To",
    "start": 333,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 364,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 374,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 390,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 415,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 421,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 425,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 431,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 437,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 445,
    "end": 448
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 448,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 456,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 460,
    "end": 461
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 463,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 465,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 471,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 476,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 484,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 487,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 499,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 501,
    "end": 502
  }
]
```
