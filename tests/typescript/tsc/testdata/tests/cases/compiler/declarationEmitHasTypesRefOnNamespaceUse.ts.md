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
        "name": "NS",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 20
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Dep",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 40
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 41,
              "end": 48
            },
            "declare": false,
            "start": 27,
            "end": 48
          }
        ],
        "start": 21,
        "end": 50
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 50
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 50
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
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "NS",
    "start": 18,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 27,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Dep",
    "start": 37,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  }
]
```
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
        "name": "Src",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "NS",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 23
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Dep",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 27
            },
            "optional": false,
            "computed": false,
            "start": 21,
            "end": 27
          },
          "typeArguments": null,
          "start": 21,
          "end": 27
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 28,
        "end": 31
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 31
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 31
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Src",
    "start": 6,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 10,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "NS",
    "start": 21,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "Dep",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  }
]
```
