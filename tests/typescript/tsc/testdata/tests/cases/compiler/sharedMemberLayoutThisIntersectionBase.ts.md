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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "start": 14,
              "end": 18
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 20,
                "end": 26
              },
              "start": 18,
              "end": 26
            },
            "accessibility": null,
            "static": false,
            "start": 14,
            "end": 27
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 29
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSThisType",
                  "start": 31,
                  "end": 35
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "kind",
                    "raw": "\"kind\"",
                    "start": 36,
                    "end": 42
                  },
                  "start": 36,
                  "end": 42
                },
                "start": 31,
                "end": 43
              },
              "start": 29,
              "end": 43
            },
            "accessibility": null,
            "static": false,
            "start": 28,
            "end": 43
          }
        ],
        "start": 12,
        "end": 45
      },
      "declare": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 56,
        "end": 57
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 61
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 63,
                  "end": 66
                },
                "start": 63,
                "end": 66
              },
              "start": 61,
              "end": 66
            },
            "accessibility": null,
            "static": false,
            "start": 60,
            "end": 66
          }
        ],
        "start": 58,
        "end": 68
      },
      "declare": false,
      "start": 46,
      "end": 68
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AB",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 76
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "typeArguments": null,
            "start": 79,
            "end": 80
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 84
            },
            "typeArguments": null,
            "start": 83,
            "end": 84
          }
        ],
        "start": 79,
        "end": 84
      },
      "declare": false,
      "start": 69,
      "end": 85
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 98
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
              "start": 99,
              "end": 100
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 109,
              "end": 115
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 99,
            "end": 115
          }
        ],
        "start": 98,
        "end": 116
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "AB",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 127
          },
          "typeArguments": null,
          "start": 125,
          "end": 127
        }
      ],
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
              "start": 130,
              "end": 134
            },
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
                  "start": 136,
                  "end": 137
                },
                "typeArguments": null,
                "start": 136,
                "end": 137
              },
              "start": 134,
              "end": 137
            },
            "accessibility": null,
            "static": false,
            "start": 130,
            "end": 137
          }
        ],
        "start": 128,
        "end": 139
      },
      "declare": false,
      "start": 87,
      "end": 139
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
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 156
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 157,
                        "end": 160
                      },
                      "start": 157,
                      "end": 160
                    }
                  ],
                  "start": 156,
                  "end": 161
                },
                "start": 155,
                "end": 161
              },
              "start": 153,
              "end": 161
            },
            "start": 152,
            "end": 161
          },
          "init": null,
          "definite": false,
          "start": 152,
          "end": 161
        }
      ],
      "declare": true,
      "start": 140,
      "end": 162
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": null,
          "start": 163,
          "end": 164
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 166
        },
        "optional": false,
        "computed": false,
        "start": 163,
        "end": 166
      },
      "directive": null,
      "start": 163,
      "end": 167
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
            "name": "ABCtor",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConstructorType",
                "abstract": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 201,
                      "end": 203
                    },
                    "typeArguments": null,
                    "start": 201,
                    "end": 203
                  },
                  "start": 198,
                  "end": 203
                },
                "start": 191,
                "end": 203
              },
              "start": 189,
              "end": 203
            },
            "start": 183,
            "end": 203
          },
          "init": null,
          "definite": false,
          "start": 183,
          "end": 203
        }
      ],
      "declare": true,
      "start": 169,
      "end": 204
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
        "start": 211,
        "end": 212
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
              "start": 213,
              "end": 214
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 223,
              "end": 229
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 213,
            "end": 229
          }
        ],
        "start": 212,
        "end": 230
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "ABCtor",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 245
      },
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 256,
              "end": 260
            },
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
                  "start": 262,
                  "end": 263
                },
                "typeArguments": null,
                "start": 262,
                "end": 263
              },
              "start": 260,
              "end": 263
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": true,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 248,
            "end": 263
          }
        ],
        "start": 246,
        "end": 265
      },
      "abstract": false,
      "declare": false,
      "start": 205,
      "end": 265
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
            "name": "c",
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
                  "start": 281,
                  "end": 282
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 283,
                        "end": 286
                      },
                      "start": 283,
                      "end": 286
                    }
                  ],
                  "start": 282,
                  "end": 287
                },
                "start": 281,
                "end": 287
              },
              "start": 279,
              "end": 287
            },
            "start": 278,
            "end": 287
          },
          "init": null,
          "definite": false,
          "start": 278,
          "end": 287
        }
      ],
      "declare": true,
      "start": 266,
      "end": 288
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 289,
          "end": 290
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null,
          "start": 291,
          "end": 292
        },
        "optional": false,
        "computed": false,
        "start": 289,
        "end": 292
      },
      "directive": null,
      "start": 289,
      "end": 293
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 295,
      "end": 305
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 305
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
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 14,
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
    "value": "string",
    "start": 20,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 31,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 35,
    "end": 36
  },
  {
    "type": "String",
    "value": "\"kind\"",
    "start": 36,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 46,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 63,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 69,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 74,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 87,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 101,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "AB",
    "start": 125,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 130,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 140,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 148,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 156,
    "end": 157
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 157,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 169,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 177,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "ABCtor",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 191,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 198,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 201,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 205,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 215,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 223,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 231,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "ABCtor",
    "start": 239,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 248,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 256,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 266,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 274,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 282,
    "end": 283
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 283,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 295,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  }
]
```
