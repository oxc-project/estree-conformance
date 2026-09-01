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
            "start": 92,
            "end": 93
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 96,
            "end": 97
          },
          "definite": false,
          "start": 92,
          "end": 97
        }
      ],
      "declare": false,
      "start": 88,
      "end": 97
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
            "name": "sid",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 133
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 137
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 142
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": "!",
                "raw": "\"!\"",
                "start": 145,
                "end": 148
              },
              "start": 141,
              "end": 148
            },
            "id": null,
            "generator": false,
            "start": 136,
            "end": 148
          },
          "definite": false,
          "start": 130,
          "end": 148
        }
      ],
      "declare": false,
      "start": 126,
      "end": 149
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
            "name": "noreturn",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 188
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 191,
                "end": 194
              }
            ],
            "returnType": null,
            "body": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 206
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "title",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 212
                },
                "optional": false,
                "computed": false,
                "start": 203,
                "end": 212
              },
              "prefix": true,
              "start": 198,
              "end": 212
            },
            "id": null,
            "generator": false,
            "start": 191,
            "end": 212
          },
          "definite": false,
          "start": 180,
          "end": 212
        }
      ],
      "declare": false,
      "start": 176,
      "end": 212
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 88,
  "end": 322
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 88,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 94,
    "end": 95
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 126,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "sid",
    "start": 130,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 138,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 143,
    "end": 144
  },
  {
    "type": "String",
    "value": "\"!\"",
    "start": 145,
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
    "value": "var",
    "start": 176,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "noreturn",
    "start": 180,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 191,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 195,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 198,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 203,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 206,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 207,
    "end": 212
  }
]
```
