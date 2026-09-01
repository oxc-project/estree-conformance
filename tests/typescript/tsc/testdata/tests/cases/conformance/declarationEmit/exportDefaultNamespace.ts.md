__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "someFunc",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 32
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
                "value": "hello!",
                "raw": "'hello!'",
                "start": 48,
                "end": 56
              },
              "start": 41,
              "end": 57
            }
          ],
          "start": 35,
          "end": 59
        },
        "expression": false,
        "start": 15,
        "end": 59
      },
      "exportKind": "value",
      "start": 0,
      "end": 59
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
            "name": "someFunc",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 69
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "someProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 70,
            "end": 78
          },
          "optional": false,
          "computed": false,
          "start": 61,
          "end": 78
        },
        "right": {
          "type": "Literal",
          "value": "yo",
          "raw": "'yo'",
          "start": 81,
          "end": 85
        },
        "start": 61,
        "end": 85
      },
      "directive": null,
      "start": 61,
      "end": 86
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 86
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
    "value": "default",
    "start": 7,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 15,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "someFunc",
    "start": 24,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 41,
    "end": 47
  },
  {
    "type": "String",
    "value": "'hello!'",
    "start": 48,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "someFunc",
    "start": 61,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "someProp",
    "start": 70,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 79,
    "end": 80
  },
  {
    "type": "String",
    "value": "'yo'",
    "start": 81,
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
