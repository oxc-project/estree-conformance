__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 67
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 101
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 104,
                "end": 106
              },
              "expression": false,
              "start": 101,
              "end": 106
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 90,
            "end": 106
          }
        ],
        "start": 68,
        "end": 108
      },
      "abstract": false,
      "declare": false,
      "start": 60,
      "end": 108
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 114
        },
        "typeArguments": null,
        "arguments": [],
        "start": 109,
        "end": 116
      },
      "directive": null,
      "start": 109,
      "end": 117
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 60,
  "end": 117
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 60,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 90,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 109,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 116,
    "end": 117
  }
]
```
