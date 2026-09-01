__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I1",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 19
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
                "name": "m1",
                "optional": false,
                "typeAnnotation": null,
                "start": 26,
                "end": 28
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 36,
                      "end": 40
                    },
                    "start": 33,
                    "end": 40
                  },
                  "start": 30,
                  "end": 40
                },
                "start": 28,
                "end": 40
              },
              "accessibility": null,
              "static": false,
              "start": 26,
              "end": 41
            }
          ],
          "start": 20,
          "end": 43
        },
        "declare": false,
        "start": 7,
        "end": 43
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 43
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I2",
          "optional": false,
          "typeAnnotation": null,
          "start": 63,
          "end": 65
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
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 74
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 82,
                      "end": 86
                    },
                    "start": 79,
                    "end": 86
                  },
                  "start": 76,
                  "end": 86
                },
                "start": 74,
                "end": 86
              },
              "accessibility": null,
              "static": false,
              "start": 72,
              "end": 87
            }
          ],
          "start": 66,
          "end": 89
        },
        "declare": false,
        "start": 53,
        "end": 89
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 46,
      "end": 89
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I3",
          "optional": false,
          "typeAnnotation": null,
          "start": 109,
          "end": 111
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
                "start": 112,
                "end": 113
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 112,
              "end": 113
            }
          ],
          "start": 111,
          "end": 114
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 123,
              "end": 125
            },
            "typeArguments": null,
            "start": 123,
            "end": 125
          },
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 129
            },
            "typeArguments": null,
            "start": 127,
            "end": 129
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
                "name": "p1",
                "optional": false,
                "typeAnnotation": null,
                "start": 178,
                "end": 180
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
                    "start": 182,
                    "end": 183
                  },
                  "typeArguments": null,
                  "start": 182,
                  "end": 183
                },
                "start": 180,
                "end": 183
              },
              "accessibility": null,
              "static": false,
              "start": 178,
              "end": 184
            }
          ],
          "start": 130,
          "end": 186
        },
        "declare": false,
        "start": 99,
        "end": 186
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 92,
      "end": 186
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 198
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 199,
                      "end": 205
                    }
                  ],
                  "start": 198,
                  "end": 206
                },
                "start": 196,
                "end": 206
              },
              "start": 194,
              "end": 206
            },
            "start": 193,
            "end": 206
          },
          "init": null,
          "definite": false,
          "start": 193,
          "end": 206
        }
      ],
      "declare": false,
      "start": 189,
      "end": 207
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 208,
          "end": 209
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": null,
          "start": 210,
          "end": 212
        },
        "optional": false,
        "computed": false,
        "start": 208,
        "end": 212
      },
      "directive": null,
      "start": 208,
      "end": 213
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 215
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 218
          },
          "optional": false,
          "computed": false,
          "start": 214,
          "end": 218
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 214,
        "end": 220
      },
      "directive": null,
      "start": 214,
      "end": 221
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 223
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 226
          },
          "optional": false,
          "computed": false,
          "start": 222,
          "end": 226
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 222,
        "end": 228
      },
      "directive": null,
      "start": 222,
      "end": 229
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 230
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
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 17,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 26,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 33,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 36,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 46,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 53,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 63,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 72,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 79,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 82,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 92,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 99,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 109,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 115,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "I1",
    "start": 123,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 127,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 178,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 189,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 196,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 198,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 199,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 210,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 215,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 216,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  }
]
```
