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
            "name": "orbitol",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 13
          },
          "init": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 16,
            "end": 17
          },
          "definite": false,
          "start": 6,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 17
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
            "name": "orbitol",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 29
          },
          "init": {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 32,
              "end": 33
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 36,
              "end": 41
            },
            "start": 32,
            "end": 41
          },
          "definite": false,
          "start": 22,
          "end": 41
        }
      ],
      "declare": false,
      "start": 18,
      "end": 41
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
            "name": "orbitol",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 49
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toExponential",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 63
          },
          "optional": false,
          "computed": false,
          "start": 42,
          "end": 63
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 42,
        "end": 65
      },
      "directive": null,
      "start": 42,
      "end": 65
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 65
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "orbitol",
    "start": 6,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 14,
    "end": 15
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 18,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "orbitol",
    "start": 22,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 34,
    "end": 35
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 36,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "orbitol",
    "start": 42,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 50,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  }
]
```
