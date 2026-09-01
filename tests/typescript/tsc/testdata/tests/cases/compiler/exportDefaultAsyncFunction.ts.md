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
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 30,
          "end": 33
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 44
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSVoidKeyword",
                  "start": 45,
                  "end": 49
                }
              ],
              "start": 44,
              "end": 50
            },
            "start": 37,
            "end": 50
          },
          "start": 35,
          "end": 50
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 51,
          "end": 53
        },
        "expression": false,
        "start": 15,
        "end": 53
      },
      "exportKind": "value",
      "start": 0,
      "end": 53
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 54,
          "end": 57
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 54,
        "end": 59
      },
      "directive": null,
      "start": 54,
      "end": 60
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 60
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
    "type": "Identifier",
    "value": "async",
    "start": 15,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 21,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 30,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 37,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 54,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  }
]
```
