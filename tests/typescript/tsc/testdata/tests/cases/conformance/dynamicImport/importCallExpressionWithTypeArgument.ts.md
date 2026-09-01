__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 19
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
              "type": "ReturnStatement",
              "argument": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 31,
                "end": 36
              },
              "start": 24,
              "end": 37
            }
          ],
          "start": 22,
          "end": 39
        },
        "expression": false,
        "start": 7,
        "end": 39
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 39
    }
  ],
  "sourceType": "module",
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
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 16,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 24,
    "end": 30
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 31,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 38,
    "end": 39
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Literal",
        "value": "use strict",
        "raw": "\"use strict\"",
        "start": 0,
        "end": 12
      },
      "directive": "use strict",
      "start": 0,
      "end": 12
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
            "name": "p1",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 19
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./0",
              "raw": "\"./0\"",
              "start": 43,
              "end": 48
            },
            "options": null,
            "phase": null,
            "start": 22,
            "end": 49
          },
          "definite": false,
          "start": 17,
          "end": 49
        }
      ],
      "declare": false,
      "start": 13,
      "end": 50
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
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 67
          },
          "init": {
            "type": "ImportExpression",
            "source": {
              "type": "Literal",
              "value": "./0",
              "raw": "\"./0\"",
              "start": 79,
              "end": 84
            },
            "options": null,
            "phase": null,
            "start": 70,
            "end": 85
          },
          "definite": false,
          "start": 65,
          "end": 85
        }
      ],
      "declare": false,
      "start": 61,
      "end": 86
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 96
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 0,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 13,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 17,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 29,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 37,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43
  },
  {
    "type": "String",
    "value": "\"./0\"",
    "start": 43,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 61,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 65,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 70,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "String",
    "value": "\"./0\"",
    "start": 79,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  }
]
```
