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
              "name": "I2",
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
              "name": "I1",
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
                "start": 136,
                "end": 138
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
                    "start": 140,
                    "end": 141
                  },
                  "typeArguments": null,
                  "start": 140,
                  "end": 141
                },
                "start": 138,
                "end": 141
              },
              "accessibility": null,
              "static": false,
              "start": 136,
              "end": 142
            }
          ],
          "start": 130,
          "end": 144
        },
        "declare": false,
        "start": 99,
        "end": 144
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 92,
      "end": 144
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
                  "start": 154,
                  "end": 156
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 157,
                      "end": 163
                    }
                  ],
                  "start": 156,
                  "end": 164
                },
                "start": 154,
                "end": 164
              },
              "start": 152,
              "end": 164
            },
            "start": 151,
            "end": 164
          },
          "init": null,
          "definite": false,
          "start": 151,
          "end": 164
        }
      ],
      "declare": false,
      "start": 147,
      "end": 165
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
          "start": 166,
          "end": 167
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 170
        },
        "optional": false,
        "computed": false,
        "start": 166,
        "end": 170
      },
      "directive": null,
      "start": 166,
      "end": 171
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
            "start": 172,
            "end": 173
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 176
          },
          "optional": false,
          "computed": false,
          "start": 172,
          "end": 176
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 172,
        "end": 178
      },
      "directive": null,
      "start": 172,
      "end": 179
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
            "start": 180,
            "end": 181
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 184
          },
          "optional": false,
          "computed": false,
          "start": 180,
          "end": 184
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 180,
        "end": 186
      },
      "directive": null,
      "start": 180,
      "end": 187
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 188
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
    "value": "I2",
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
    "value": "I1",
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
    "start": 136,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 147,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "I3",
    "start": 154,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 157,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 168,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 174,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 182,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187
  }
]
```
