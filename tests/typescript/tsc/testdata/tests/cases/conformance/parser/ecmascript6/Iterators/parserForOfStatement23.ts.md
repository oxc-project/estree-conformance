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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 18
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 22,
              "end": 25
            },
            "start": 20,
            "end": 25
          },
          "start": 19,
          "end": 25
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
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
                  "name": "async",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 42
                },
                "init": null,
                "definite": false,
                "start": 37,
                "end": 42
              }
            ],
            "declare": false,
            "start": 33,
            "end": 43
          },
          {
            "type": "ForOfStatement",
            "await": true,
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "async",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 64
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 69
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 71,
              "end": 73
            },
            "start": 48,
            "end": 73
          }
        ],
        "start": 27,
        "end": 75
      },
      "expression": false,
      "start": 0,
      "end": 75
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 75
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "async",
    "start": 0,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 15,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 22,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 33,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 37,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 48,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 52,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 59,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 65,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  }
]
```
