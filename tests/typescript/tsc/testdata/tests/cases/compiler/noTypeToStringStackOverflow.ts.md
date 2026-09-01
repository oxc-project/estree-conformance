__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 67
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 76,
                "end": 78
              },
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 97
                },
                "typeArguments": null,
                "start": 89,
                "end": 97
              },
              "start": 76,
              "end": 97
            },
            "id": null,
            "generator": false,
            "start": 70,
            "end": 97
          },
          "definite": false,
          "start": 66,
          "end": 97
        }
      ],
      "declare": false,
      "start": 60,
      "end": 98
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 60,
  "end": 98
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 60,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 73,
    "end": 75
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 76,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 79,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 89,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  }
]
```
