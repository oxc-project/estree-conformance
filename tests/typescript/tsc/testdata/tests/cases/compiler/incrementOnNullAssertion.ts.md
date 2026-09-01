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
        "name": "Dictionary",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
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
              "start": 21,
              "end": 22
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 22
          }
        ],
        "start": 20,
        "end": 23
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "myFavouriteType",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 48,
                    "end": 54
                  },
                  "start": 46,
                  "end": 54
                },
                "start": 31,
                "end": 54
              }
            ],
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
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 57,
                      "end": 58
                    },
                    "typeArguments": null,
                    "start": 57,
                    "end": 58
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 61,
                    "end": 70
                  }
                ],
                "start": 57,
                "end": 70
              },
              "start": 55,
              "end": 70
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 30,
            "end": 70
          }
        ],
        "start": 24,
        "end": 72
      },
      "declare": false,
      "start": 0,
      "end": 72
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 79,
            "end": 80
          },
          "init": {
            "type": "Literal",
            "value": "bar",
            "raw": "'bar'",
            "start": 83,
            "end": 88
          },
          "definite": false,
          "start": 79,
          "end": 88
        }
      ],
      "declare": false,
      "start": 73,
      "end": 88
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dictionary",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 98,
                  "end": 108
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 109,
                      "end": 115
                    }
                  ],
                  "start": 108,
                  "end": 116
                },
                "start": 98,
                "end": 116
              },
              "start": 96,
              "end": 116
            },
            "start": 93,
            "end": 116
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 119,
            "end": 121
          },
          "definite": false,
          "start": 93,
          "end": 121
        }
      ],
      "declare": false,
      "start": 89,
      "end": 121
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 129
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 131
          },
          "optional": false,
          "computed": true,
          "start": 126,
          "end": 132
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 137,
          "end": 146
        },
        "start": 126,
        "end": 146
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 157
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 159
                },
                "optional": false,
                "computed": true,
                "start": 154,
                "end": 160
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 163,
                "end": 164
              },
              "start": 154,
              "end": 164
            },
            "directive": null,
            "start": 154,
            "end": 164
          }
        ],
        "start": 148,
        "end": 166
      },
      "alternate": {
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
                  "name": "nu",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 182,
                  "end": 184
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 187,
                    "end": 190
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 192
                  },
                  "optional": false,
                  "computed": true,
                  "start": 187,
                  "end": 193
                },
                "definite": false,
                "start": 182,
                "end": 193
              }
            ],
            "declare": false,
            "start": 178,
            "end": 193
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 202,
                  "end": 203
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 206,
                    "end": 209
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 211
                  },
                  "optional": false,
                  "computed": true,
                  "start": 206,
                  "end": 212
                },
                "definite": false,
                "start": 202,
                "end": 212
              }
            ],
            "declare": false,
            "start": 198,
            "end": 212
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 217,
                    "end": 220
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 221,
                    "end": 222
                  },
                  "optional": false,
                  "computed": true,
                  "start": 217,
                  "end": 223
                },
                "start": 217,
                "end": 224
              },
              "start": 217,
              "end": 226
            },
            "directive": null,
            "start": 217,
            "end": 226
          }
        ],
        "start": 172,
        "end": 228
      },
      "start": 122,
      "end": 228
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 228
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
    "value": "Dictionary",
    "start": 10,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "myFavouriteType",
    "start": 31,
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
    "value": "string",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "T",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 61,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 73,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 81,
    "end": 82
  },
  {
    "type": "String",
    "value": "'bar'",
    "start": 83,
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
    "value": "foo",
    "start": 93,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "Dictionary",
    "start": 98,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "number",
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
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 122,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 126,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 133,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 137,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 154,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 161,
    "end": 162
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 167,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 178,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "nu",
    "start": 182,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 187,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 198,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 204,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 217,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228
  }
]
```
