__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 72
      },
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "merged_props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 128,
                  "end": 140
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 143,
                  "end": 145
                },
                "definite": false,
                "start": 128,
                "end": 145
              }
            ],
            "declare": false,
            "start": 124,
            "end": 146
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
                  "name": "merged_props",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 151,
                  "end": 163
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 167
                },
                "optional": false,
                "computed": false,
                "start": 151,
                "end": 167
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 170,
                "end": 174
              },
              "start": 151,
              "end": 174
            },
            "directive": null,
            "start": 151,
            "end": 175
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "merged_props",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 199
            },
            "start": 180,
            "end": 200
          }
        ],
        "start": 75,
        "end": 202
      },
      "expression": false,
      "start": 61,
      "end": 202
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 215
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 218,
        "end": 220
      },
      "expression": false,
      "start": 204,
      "end": 220
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 260,
            "end": 262
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "merged_props",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 275
          },
          "optional": false,
          "computed": false,
          "start": 260,
          "end": 275
        },
        "right": {
          "type": "ObjectExpression",
          "properties": [],
          "start": 278,
          "end": 280
        },
        "start": 260,
        "end": 280
      },
      "directive": null,
      "start": 260,
      "end": 281
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 282,
              "end": 284
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "merged_props",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 297
            },
            "optional": false,
            "computed": false,
            "start": 282,
            "end": 297
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 301
          },
          "optional": false,
          "computed": false,
          "start": 282,
          "end": 301
        },
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 304,
          "end": 308
        },
        "start": 282,
        "end": 308
      },
      "directive": null,
      "start": 282,
      "end": 309
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 310,
          "end": 312
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "merged_props",
          "optional": false,
          "typeAnnotation": null,
          "start": 313,
          "end": 325
        },
        "optional": false,
        "computed": false,
        "start": 310,
        "end": 325
      },
      "directive": null,
      "start": 310,
      "end": 325
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 61,
  "end": 325
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 61,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 70,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 124,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "merged_props",
    "start": 128,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "merged_props",
    "start": 151,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 164,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 168,
    "end": 169
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 170,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 174,
    "end": 175
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 180,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "merged_props",
    "start": 187,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 204,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 218,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 260,
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
    "value": "merged_props",
    "start": 263,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 279,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 282,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "merged_props",
    "start": 285,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 298,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 302,
    "end": 303
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 304,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 310,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "merged_props",
    "start": 313,
    "end": 325
  }
]
```
