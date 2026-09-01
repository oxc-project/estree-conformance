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
        "name": "ErrorConstructor",
        "optional": false,
        "typeAnnotation": null,
        "start": 92,
        "end": 108
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "captureStackTrace",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 130
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "targetObject",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 151
                    },
                    "typeArguments": null,
                    "start": 145,
                    "end": 151
                  },
                  "start": 143,
                  "end": 151
                },
                "start": 131,
                "end": 151
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "constructorOpt",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Function",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 170,
                      "end": 178
                    },
                    "typeArguments": null,
                    "start": 170,
                    "end": 178
                  },
                  "start": 168,
                  "end": 178
                },
                "start": 153,
                "end": 178
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 181,
                "end": 185
              },
              "start": 179,
              "end": 185
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 113,
            "end": 186
          }
        ],
        "start": 109,
        "end": 188
      },
      "declare": false,
      "start": 82,
      "end": 188
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
                  "name": "ErrorConstructor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 205,
                  "end": 221
                },
                "typeArguments": null,
                "start": 205,
                "end": 221
              },
              "start": 203,
              "end": 221
            },
            "start": 202,
            "end": 221
          },
          "init": null,
          "definite": false,
          "start": 202,
          "end": 221
        }
      ],
      "declare": true,
      "start": 190,
      "end": 221
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
          "start": 222,
          "end": 223
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Error",
          "optional": false,
          "typeAnnotation": null,
          "start": 226,
          "end": 231
        },
        "start": 222,
        "end": 231
      },
      "directive": null,
      "start": 222,
      "end": 232
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
          "start": 239,
          "end": 240
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "RangeError",
          "optional": false,
          "typeAnnotation": null,
          "start": 243,
          "end": 253
        },
        "start": 239,
        "end": 253
      },
      "directive": null,
      "start": 239,
      "end": 254
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 260
          },
          "typeArguments": null,
          "arguments": [],
          "start": 255,
          "end": 262
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "message",
          "optional": false,
          "typeAnnotation": null,
          "start": 263,
          "end": 270
        },
        "optional": false,
        "computed": false,
        "start": 255,
        "end": 270
      },
      "directive": null,
      "start": 255,
      "end": 270
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
          "start": 271,
          "end": 272
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "captureStackTrace",
          "optional": false,
          "typeAnnotation": null,
          "start": 273,
          "end": 290
        },
        "optional": false,
        "computed": false,
        "start": 271,
        "end": 290
      },
      "directive": null,
      "start": 271,
      "end": 290
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 82,
  "end": 290
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 82,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "ErrorConstructor",
    "start": 92,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "captureStackTrace",
    "start": 113,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "targetObject",
    "start": 131,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 145,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "constructorOpt",
    "start": 153,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 170,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 181,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 190,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 198,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "ErrorConstructor",
    "start": 205,
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
    "value": "=",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 226,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "RangeError",
    "start": 243,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 255,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 263,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "captureStackTrace",
    "start": 273,
    "end": 290
  }
]
```
