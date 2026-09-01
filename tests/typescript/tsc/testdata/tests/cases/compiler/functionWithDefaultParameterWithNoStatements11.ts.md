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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 7,
                  "end": 10
                },
                "start": 7,
                "end": 12
              },
              "start": 5,
              "end": 12
            },
            "start": 4,
            "end": 12
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 24,
        "end": 27
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 29
          },
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 34,
              "end": 35
            },
            "optional": false,
            "computed": true,
            "start": 32,
            "end": 36
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 28,
          "end": 36
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 38,
        "end": 41
      },
      "expression": false,
      "start": 15,
      "end": 41
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 55
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 57
          },
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 61
            },
            "property": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 62,
              "end": 63
            },
            "optional": false,
            "computed": true,
            "start": 60,
            "end": 64
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 56,
          "end": 64
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 66,
        "end": 69
      },
      "expression": false,
      "start": 43,
      "end": 69
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 69
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
    "value": "v",
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
    "type": "Identifier",
    "value": "any",
    "start": 7,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 15,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 33,
    "end": 34
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 43,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 52,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 61,
    "end": 62
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  }
]
```
