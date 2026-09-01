__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 20,
                "end": 27
              },
              "start": 18,
              "end": 27
            },
            "start": 17,
            "end": 27
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 31
          },
          "definite": false,
          "start": 17,
          "end": 31
        }
      ],
      "declare": false,
      "start": 13,
      "end": 32
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
                "type": "TSNumberKeyword",
                "start": 40,
                "end": 46
              },
              "start": 38,
              "end": 46
            },
            "start": 37,
            "end": 46
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 50
          },
          "definite": false,
          "start": 37,
          "end": 50
        }
      ],
      "declare": false,
      "start": 33,
      "end": 51
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
                "type": "TSVoidKeyword",
                "start": 59,
                "end": 63
              },
              "start": 57,
              "end": 63
            },
            "start": 56,
            "end": 63
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 67
          },
          "definite": false,
          "start": 56,
          "end": 67
        }
      ],
      "declare": false,
      "start": 52,
      "end": 68
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 83,
                  "end": 92
                },
                "typeArguments": null,
                "start": 76,
                "end": 92
              },
              "start": 74,
              "end": 92
            },
            "start": 73,
            "end": 92
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 96
          },
          "definite": false,
          "start": 73,
          "end": 96
        }
      ],
      "declare": false,
      "start": 69,
      "end": 97
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 106
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 112
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 114,
                "end": 120
              },
              "start": 112,
              "end": 120
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
            "start": 109,
            "end": 121
          }
        ],
        "start": 107,
        "end": 123
      },
      "abstract": false,
      "declare": false,
      "start": 99,
      "end": 123
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
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 131,
                  "end": 132
                },
                "typeArguments": null,
                "start": 131,
                "end": 132
              },
              "start": 129,
              "end": 132
            },
            "start": 128,
            "end": 132
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 135,
            "end": 136
          },
          "definite": false,
          "start": 128,
          "end": 136
        }
      ],
      "declare": false,
      "start": 124,
      "end": 137
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 150
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 156
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 158,
                "end": 164
              },
              "start": 156,
              "end": 164
            },
            "accessibility": null,
            "static": false,
            "start": 153,
            "end": 165
          }
        ],
        "start": 151,
        "end": 167
      },
      "declare": false,
      "start": 139,
      "end": 167
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
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 176
                },
                "typeArguments": null,
                "start": 175,
                "end": 176
              },
              "start": 173,
              "end": 176
            },
            "start": 172,
            "end": 176
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 179,
            "end": 180
          },
          "definite": false,
          "start": 172,
          "end": 180
        }
      ],
      "declare": false,
      "start": 168,
      "end": 181
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
            "name": "g",
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
                      "name": "baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 192,
                      "end": 195
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 197,
                        "end": 203
                      },
                      "start": 195,
                      "end": 203
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 192,
                    "end": 203
                  }
                ],
                "start": 190,
                "end": 205
              },
              "start": 188,
              "end": 205
            },
            "start": 187,
            "end": 205
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 208,
            "end": 209
          },
          "definite": false,
          "start": 187,
          "end": 209
        }
      ],
      "declare": false,
      "start": 183,
      "end": 210
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
            "name": "g2",
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
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 221,
                      "end": 222
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 224,
                        "end": 230
                      },
                      "start": 222,
                      "end": 230
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 221,
                    "end": 230
                  }
                ],
                "start": 219,
                "end": 232
              },
              "start": 217,
              "end": 232
            },
            "start": 215,
            "end": 232
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 235,
            "end": 236
          },
          "definite": false,
          "start": 215,
          "end": 236
        }
      ],
      "declare": false,
      "start": 211,
      "end": 237
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 249,
        "end": 250
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 264,
                    "end": 265
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 268,
                    "end": 269
                  },
                  "definite": false,
                  "start": 264,
                  "end": 269
                }
              ],
              "declare": false,
              "start": 260,
              "end": 270
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 253,
            "end": 270
          }
        ],
        "start": 251,
        "end": 272
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 239,
      "end": 272
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 273,
          "end": 274
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 277,
          "end": 278
        },
        "start": 273,
        "end": 278
      },
      "directive": null,
      "start": 273,
      "end": 279
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 290,
        "end": 291
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
              "start": 292,
              "end": 293
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 292,
            "end": 293
          }
        ],
        "start": 291,
        "end": 294
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                "start": 298,
                "end": 299
              },
              "typeArguments": null,
              "start": 298,
              "end": 299
            },
            "start": 296,
            "end": 299
          },
          "start": 295,
          "end": 299
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 307,
                "end": 308
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 311,
                "end": 312
              },
              "start": 307,
              "end": 312
            },
            "directive": null,
            "start": 307,
            "end": 313
          }
        ],
        "start": 301,
        "end": 315
      },
      "expression": false,
      "start": 281,
      "end": 315
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
          "start": 316,
          "end": 317
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 320,
          "end": 321
        },
        "start": 316,
        "end": 321
      },
      "directive": null,
      "start": 316,
      "end": 322
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 329,
        "end": 330
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 334
            },
            "initializer": null,
            "computed": false,
            "start": 333,
            "end": 334
          }
        ],
        "start": 331,
        "end": 336
      },
      "const": false,
      "declare": false,
      "start": 324,
      "end": 336
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
            "name": "j",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 345
                },
                "typeArguments": null,
                "start": 344,
                "end": 345
              },
              "start": 342,
              "end": 345
            },
            "start": 341,
            "end": 345
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 349
          },
          "definite": false,
          "start": 341,
          "end": 349
        }
      ],
      "declare": false,
      "start": 337,
      "end": 350
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 350
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "String",
    "value": "''",
    "start": 8,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 13,
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
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 20,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 33,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 52,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 59,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 69,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "d",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 76,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 83,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 99,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 109,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 114,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 124,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 136,
    "end": 137
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 139,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "bar",
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
    "value": "string",
    "start": 158,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 168,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 179,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 183,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 192,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 197,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 206,
    "end": 207
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 211,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "g2",
    "start": 215,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 219,
    "end": 220
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 224,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 239,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 253,
    "end": 259
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 260,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 266,
    "end": 267
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 273,
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
    "value": "x",
    "start": 277,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 281,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 324,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 337,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "j",
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
    "value": "E",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
  }
]
```
