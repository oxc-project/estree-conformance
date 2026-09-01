__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 18
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 44
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 48,
                  "end": 52
                },
                "start": 46,
                "end": 52
              },
              "body": null,
              "expression": false,
              "start": 32,
              "end": 53
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 25,
            "end": 53
          }
        ],
        "start": 19,
        "end": 55
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 55
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 56
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 15,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 19,
    "end": 20
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 25,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 32,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 41,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 48,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 54,
    "end": 55
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
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 3
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 7
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 0,
        "end": 9
      },
      "directive": null,
      "start": 0,
      "end": 10
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 10
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 0,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 4,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  }
]
```
