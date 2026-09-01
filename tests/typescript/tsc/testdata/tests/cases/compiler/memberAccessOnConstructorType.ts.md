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
            "name": "f",
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
                    "type": "TSVoidKeyword",
                    "start": 17,
                    "end": 21
                  },
                  "start": 14,
                  "end": 21
                },
                "start": 7,
                "end": 21
              },
              "start": 5,
              "end": 21
            },
            "start": 4,
            "end": 21
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 21
        }
      ],
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 23,
            "end": 24
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "arguments",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 34
          },
          "optional": false,
          "computed": false,
          "start": 23,
          "end": 34
        },
        "operator": "==",
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 38,
          "end": 39
        },
        "start": 23,
        "end": 39
      },
      "directive": null,
      "start": 23,
      "end": 40
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 40
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
    "value": "f",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 7,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 14,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 17,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "arguments",
    "start": 25,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 35,
    "end": 37
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  }
]
```
